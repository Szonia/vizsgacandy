import { Component } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';
import { ChangeDetectorRef } from '@angular/core'; 

interface SavanyuUditok {
  id: string;
  nev: string;
  image: string;
  leiras: string;
  ar: number;
  darab: number;
}

@Component({
  selector: 'app-uditok',
  templateUrl: './savanyu-uditok.component.html',
  styleUrls: ['./savanyu-uditok.component.css']
})
export class SavanyuUditokComponent {
  uditok: SavanyuUditok[] = [
    {
      id: '1',
      nev: 'Arizona Marvel LXR Hero Hydration Lemon Lime 473ml',
      image: './assets/uditokImg/Arizona Marvel LXR Hero Hydration Lemon Lime 473ml.jpg',
      leiras: 'Az Arizona Marvel LXR Hero Hydration Lemon Lime egy frissítő, szuperhős-inspirálta üdítőital, amely a citrom és lime élénk, citrusos ízét kombinálja egy alacsony cukortartalmú, elektrolitokban és vitaminokban gazdag formulával.',
      ar: 2200,
      darab: 1
    },
    {
      id: '2',
      nev: 'WarHeads Sour Black Cherry Soda 355ml',
      image: './assets/uditokImg/WarHeads Sour Black Cherry Soda 355ml.jpg',
      leiras: 'A WarHeads Sour Black Cherry Soda egy intenzíven savanyú, fekete cseresznye ízű szénsavas üdítőital, amely a WarHeads cukorkák jellegzetes, arcfintorító savanyúságát ötvözi a gyümölcsös ízzel, egyedi és merész ízélményt nyújtva.',
      ar: 990,
      darab: 1
    },
    {
      id: '3',
      nev: 'Warheads Blue Raspberry Soda 355ml',
      image: './assets/uditokImg/Warheads Blue Raspberry Soda 355ml.jpg',
      leiras: 'A Warheads Blue Raspberry Soda egy intenzíven savanyú, kék málna ízű szénsavas üdítőital, amely ötvözi a Warheads cukorkák jellegzetes, arcfintorító savanyúságát a gyümölcsös ízzel, egyedi és merész ízélményt nyújtva.',
      ar: 990,
      darab: 1
    },
    {
      id: '4',
      nev: 'WarHeads Sour Green Apple Soda 355ml',
      image: './assets/uditokImg/WarHeads Sour Green Apple Soda 355ml.jpg',
      leiras: 'A WarHeads Sour Green Apple Soda egy intenzíven savanyú, zöldalma ízű szénsavas üdítőital, amely ötvözi a WarHeads cukorkák jellegzetes, arcfintorító savanyúságát a frissítő almaízzel, egyedi és merész ízélményt nyújtva.',
      ar: 990,
      darab: 1
    },
    {
      id: '5',
      nev: 'Warheads Sour Watermelon Soda 355ml',
      image: './assets/uditokImg/Warheads Sour Watermelon Soda 355ml.jpg',
      leiras: 'A Warheads Sour Watermelon Soda egy intenzíven savanyú, görögdinnye ízű szénsavas üdítőital, amely ötvözi a Warheads cukorkák jellegzetes, arcfintorító savanyúságát a frissítő görögdinnye ízével, egyedi és merész ízélményt nyújtva.',
      ar: 990,
      darab: 1
    },
    {
      id: '6',
      nev: 'Warheads Sour peach soda 355ml',
      image: './assets/uditokImg/Warheads Sour peach soda 355ml.jpg',
      leiras: 'A Warheads Sour Peach Soda egy intenzíven savanyú, őszibarack ízű szénsavas üdítőital, amely ötvözi a Warheads cukorkák jellegzetes, arcfintorító savanyúságát az édes őszibarack zamatával, egyedi és merész ízélményt nyújtva.',
      ar: 990,
      darab: 1
    },
    {
      id: '7',
      nev: 'Fanta Lemon Soda 330ml',
      image: './assets/uditokImg/Fanta Lemon Soda 330ml.jpg',
      leiras: 'A Fanta Lemon Soda egy frissítő citrusos üdítőital, amely a zamatos citrom savanykás és élénkítő ízét kínálja, tökéletes egyensúlyt teremtve az édesség és a citrusos frissesség között.',
      ar: 480,
      darab: 1
    },
    {
      id: '8',
      nev: 'Fanta Lime 500ml',
      image: './assets/uditokImg/Fanta Lime 500ml.jpg',
      leiras: 'A Fanta Lime egy frissítően citrusos, élénk lime ízű szénsavas üdítőital, amely tökéletes egyensúlyt teremt az édes és savanykás ízek között.',
      ar: 1280,
      darab: 1
    },
    {
      id: '9',
      nev: 'Skittles Drink Sour 414ml',
      image: './assets/uditokImg/Skittles Drink Sour 414ml.jpg',
      leiras: 'A Skittles Drink Sour egy merész és izgalmas üdítőital, amely a Skittles Sour cukorkák intenzív, savanyú-édes ízvilágát idézi, ötvözve a citrom, zöldalma, eper, szőlő és mandarin fanyar és frissítő ízeit egy stimuláló italban.',
      ar: 1790,
      darab: 1
    },
    {
      id: '10',
      nev: 'Ghost Hydration Drink Sour Patch Kids 500ml',
      image: './assets/uditokImg/Ghost Hydration Drink Sour Patch Kids 500ml.jpg',
      leiras: 'A Ghost Hydration Drink Sour Patch Kids egy egyedi, savanyú cukorkák által inspirált üdítőital, amely ötvözi a Sour Patch Kids cukorkák jellegzetes savanyú-édes ízprofilját egy frissítő és hidratáló formulával.',
      ar: 2990,
      darab: 1
    },
    {
      id: '11',
      nev: 'Ghost Hydration Drink Orange Squeeze 500ml',
      image: './assets/uditokImg/Ghost Hydration Drink Orange Squeeze 500ml.jpg',
      leiras: 'Frissítő, lédús narancsos íz enyhe savanykás utóízzel.',
      ar: 7411,
      darab: 1
    },
    {
      id: '12',
      nev: 'Ghost Hydration Drink Lemon Lime 500ml',
      image: './assets/uditokImg/Ghost Hydration Drink Lemon Lime 500ml.jpg',
      leiras: 'Kiegyensúlyozott, üdítő citrom-lime ízkombináció kellemes savanyú beütéssel.',
      ar: 7411,
      darab: 1
    },
    {
      id: '13',
      nev: 'Ghost Hydration Drink Sour Pink Lemonade 500ml',
      image: './assets/uditokImg/Ghost Hydration Drink Sour Pink Lemonade 500ml.jpg',
      leiras: 'Savanykás rózsaszín limonádé íz, frissítő citrusos aromával.',
      ar: 7411,
      darab: 1
    },
    {
      id: '14',
      nev: 'Ghost Energy Drink, Warheads Sour Watermelon 500ml',
      image: './assets/uditokImg/Ghost Energy Drink, Warheads Sour Watermelon 500ml.jpg',
      leiras: 'Intenzív, savanyú görögdinnye ízű energiaital, amely a népszerű Warheads cukorka jellegzetes, csípős-savanyú aromáját idézi, frissítő és energizáló élményt nyújtva.',
      ar: 7411,
      darab: 1
    }
  ];

  showNotification = false;

  constructor(private cartService: CartService, private cdr: ChangeDetectorRef) {}

  kosarbaRak(i: number) {
    const termek = this.uditok[i];
    this.cartService.addToCart(termek);
    console.log(`"${termek.nev}" hozzáadva a kosárhoz.`);
    console.log('Kosár tartalma:', this.cartService.getCartItems());

    this.showNotification = true;
    this.cdr.detectChanges();

    setTimeout(() => {
      this.showNotification = false;
      this.cdr.detectChanges();
      console.log('Értesítés eltüntetve:', this.showNotification);
    }, 500);
  }

  
    sortProducts(order: string) {
      if (order === 'low-to-high') {
        this.uditok.sort((a, b) => a.ar - b.ar);
      } else if (order === 'high-to-low') {
        this.uditok.sort((a, b) => b.ar - a.ar);
      }
    }

    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }