import { Request, Response } from "express";
import { db } from "../firebase";
import { ref, get, set, remove } from "firebase/database";

const CARTS_REF = "carts";

/**
 * 🔹 Kosár lekérése
 */
export const getCart = async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    const snapshot = await get(ref(db, `${CARTS_REF}/${userId}`));
    if (!snapshot.exists()) {
      return res.json({ items: [] });
    }
    res.json(snapshot.val());
  } catch (error) {
    res.status(500).json({ error: "Hiba történt a kosár lekérésekor." });
  }
};

/**
 * 🔹 Termék hozzáadása a kosárhoz
 */
export const addToCart = async (req: Request, res: Response) => {
  const { userId, productId, quantity } = req.body;
  try {
    const cartRef = ref(db, `${CARTS_REF}/${userId}`);
    const snapshot = await get(cartRef);
    let cart = { items: [] };

    // Ha létezik kosár, töltsük be az adatokat
    if (snapshot.exists()) {
      cart = snapshot.val();
    }

    // Ellenőrizzük, hogy a termék már benne van-e a kosárban
    const existingItem = cart.items.find((item: any) => item.productId === productId);
    if (existingItem) {
      existingItem.quantity += quantity;  // Ha van, növeljük a mennyiséget
    } else {
      cart.items.push({ productId, quantity });  // Ha nincs, hozzáadjuk az új terméket
    }

    // Frissítjük a kosarat
    await set(cartRef, cart);

    res.json(cart);  // Visszaküldjük az új kosarat
  } catch (error) {
    console.error("❌ Hiba történt a kosár frissítésekor:", error);
    res.status(500).json({ error: "Hiba történt a kosár frissítésekor." });
  }
};

/**
 * 🔹 Kosár frissítése (új termékek hozzáadása vagy meglévő módosítása)
 */
export const updateCart = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const { items } = req.body;  // Az új termékek, amiket be akarunk tenni a kosárba

  try {
    const cartRef = ref(db, `${CARTS_REF}/${userId}`);
    await set(cartRef, { items });  // Frissítjük a kosarat
    res.json({ message: "Kosár frissítve." });
  } catch (error) {
    console.error("❌ Hiba történt a kosár frissítésekor:", error);
    res.status(500).json({ error: "Hiba történt a kosár frissítésekor." });
  }
};

/**
 * 🔹 Kosár törlése
 * Ha termékId van, akkor a terméket töröljük, ha nincs, akkor az egész kosarat töröljük.
 */
export const deleteCart = async (req: Request, res: Response) => {
  const { userId, productId } = req.params;

  try {
    // Kosár lekérése
    const cartRef = ref(db, `${CARTS_REF}/${userId}`);
    const snapshot = await get(cartRef);

    if (!snapshot.exists()) {
      return res.status(404).json({ error: "Kosár nem található." });
    }

    const cart = snapshot.val();

    // Ha van productId, akkor töröljük a terméket a kosárból
    if (productId) {
      const productIndex = cart.items.findIndex((item: any) => item.productId === productId);
      if (productIndex === -1) {
        return res.status(404).json({ error: "A termék nem található a kosárban." });
      }

      // Töröljük a terméket
      cart.items.splice(productIndex, 1);

      // Ha üres a kosár, akkor töröljük a teljes kosarat
      if (cart.items.length === 0) {
        await remove(cartRef);
        return res.status(200).json({ message: "Kosár törölve." });
      }

      // Frissítjük a kosarat
      await set(cartRef, cart);
      return res.status(200).json({ message: "Termék törölve a kosárból.", cart });
    }

    // Ha nincs productId, akkor töröljük az egész kosarat
    await remove(cartRef);
    res.status(200).json({ message: "Kosár törölve." });

  } catch (error) {
    console.error("❌ Hiba történt a kosár törlésénél:", error);
    res.status(500).json({ error: "Hiba történt a kosár törlésénél." });
  }
};
