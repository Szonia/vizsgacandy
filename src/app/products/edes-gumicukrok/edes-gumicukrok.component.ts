import { Component } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';
import { ChangeDetectorRef } from '@angular/core'; 


interface EdesGumicukrok {
  id: string;
  nev: string;
  image: string;
  leiras: string;
  ar: number;
  darab: number;
}

@Component({
  selector: 'app-gumicukor',
  templateUrl: './edes-gumicukrok.component.html',
  styleUrls: ['./edes-gumicukrok.component.css']
})
export class EdesGumicukrokComponent {
  gumicukrok: EdesGumicukrok[] = [
    {
      id: '1',
      nev: 'Bazooka Rattlerz Melting Fruity Candy 40g',
      image: './assets/cukorImg/Bazooka Rattlerz Melting Fruity Candy 40g.jpg',
      leiras: 'A Bazooka Rattlerz Melting Fruity Candy egy gyümölcsös ízű olvadós cukorka, amely édes, ropogós héjában intenzív gyümölcsös ízeket kínál, és könnyen felolvad a szájban.',
      ar: 563,
      darab: 1
    },
    {
      id: '2',
      nev: 'Nerds Gummy Clusters Very Berry 142g',
      image: './assets/cukorImg/Nerds Gummy Clusters Very Berry 142g.jpg',
      leiras: 'A Nerds Gummy Clusters Very Berry egy egyedi textúrájú cukorka, amely bogyós gyümölcsök intenzív ízvilágát kínálja, apró NERDS cukorkákkal kombinálva, így biztosítva egy roppanós és gyümölcsös édességélményt.',
      ar: 2190,
      darab: 1
    },
    {
      id: '3',
      nev: 'Nerds Gummy Clusters 141g',
      image: './assets/cukorImg/Nerds Gummy Clusters 141g.jpg',
      leiras: 'A Nerds Gummy Clusters egy egyedi textúrájú cukorka, amely Rainbow ízben készül, ahol a külső ropogós NERDS cukorkák egy puha gumicukor magot borítanak, kínálva egy intenzív, gyümölcsös ízvilágot szőlő, cseresznye és narancs aromákkal.',
      ar: 1990,
      darab: 1
    },
    {
      id: '4',
      nev: 'Nerds Gummy Clusters Theater Box 85g',
      image: './assets/cukorImg/Nerds Gummy Clusters Theater Box 85g.jpg',
      leiras: 'A Nerds Gummy Clusters Theater Box egy egyedi textúrájú cukorka, amely Rainbow ízben készül, ahol a külső ropogós NERDS cukorkák egy puha gumicukor magot borítanak, kínálva egy intenzív, gyümölcsös ízvilágot szőlő, cseresznye és narancs aromákkal.',
      ar: 1490,
      darab: 1
    },
    {
      id: '5',
      nev: 'Nerds Candy Grape and Strawberry 142g',
      image: './assets/cukorImg/Nerds Candy Grape and Strawberry 142g.jpg',
      leiras: 'A Nerds Candy Grape and Strawberry egy klasszikus, két külön rekeszben kínált cukorka, amely az intenzív, édeskés szőlő és a friss, gyümölcsös eper ízét kombinálja apró, ropogós cukorkaszemekben.',
      ar: 1490,
      darab: 1
    },
    {
      id: '6',
      nev: 'Nerds Gummy Clusters Very Berry Share Pouch 85g',
      image: './assets/cukorImg/Nerds Gummy Clusters Very Berry Share Pouch 85g.jpg',
      leiras: 'A Nerds Gummy Clusters Very Berry Share Pouch egy egyedi textúrájú cukorka, amely bogyós gyümölcsök intenzív ízvilágát kínálja, ahol a puha gumicukor magot apró, ropogós NERDS cukorkák borítják, létrehozva egy komplex és élménydús édességet.',
      ar: 1690,
      darab: 1
    },
    {
      id: '7',
      nev: 'Nerds Big Chewy Theater Box 120g',
      image: './assets/cukorImg/Nerds Big Chewy Theater Box 120g.jpg',
      leiras: 'A Nerds Big Chewy Theater Box egy egyedi textúrájú cukorka, amely ropogós NERDS héjjal és puha, gyümölcsös ízű (szőlő és eper) belsővel rendelkezik, kínálva egy komplex és élménydús édességet.',
      ar: 1430,
      darab: 1
    },
    {
      id: '8',
      nev: 'Nerds Frosty Fruit Candy 141g',
      image: './assets/cukorImg/Nerds Frosty Fruit Candy 141g.jpg',
      leiras: 'A Nerds Frosty Fruit Candy egy karácsonyi különkiadású cukorka, amely görögdinnye, vadcseresznye és puncs ízeket tartalmaz, apró, ropogós cukorkaszemekben, amelyek élénk színekkel és intenzív gyümölcsös ízvilággal kínálnak ünnepi édességélményt.',
      ar: 1690,
      darab: 1
    },
    {
      id: '9',
      nev: 'Wonka Nerds Grape And Strawberry 47g',
      image: './assets/cukorImg/Wonka Nerds Grape And Strawberry 47g.jpg',
      leiras: 'A Wonka Nerds Grape And Strawberry egy klasszikus, két rekeszben kínált apró, ropogós cukorka, amely az egyik oldalon intenzív szőlő, a másikon édes eper ízű, lehetővé téve a fogyasztónak, hogy külön-külön vagy keverve élvezze a két gyümölcsös ízt.',
      ar: 990,
      darab: 1
    },
    {
      id: '10',
      nev: 'Nerds Fruits Candy 142g',
      image: './assets/cukorImg/Nerds Fruits Candy 142g.jpg',
      leiras: 'A Nerds Fruits Candy egy színes, ropogós cukorka, amely többféle gyümölcsös ízt (például eper, szőlő, cseresznye, dinnye és narancs) kínál apró, változatos formájú és méretű cukorkaszemekben, intenzív és izgalmas ízélményt nyújtva.',
      ar: 1490,
      darab: 1
    },
    {
      id: '11',
      nev: 'Nerds Watermelon And Cherry 47g',
      image: './assets/cukorImg/Nerds Watermelon And Cherry 47g.jpg',
      leiras: 'A Nerds Watermelon And Cherry egy kétrekeszes, ropogós cukorka, amely az egyik oldalon friss, nyári görögdinnye, a másikon pedig édes és intenzív cseresznye ízű apró cukorkaszemeket kínál, lehetővé téve a fogyasztónak, hogy külön-külön vagy keverve élvezze a két gyümölcsös ízt.',
      ar: 990,
      darab: 1
    },
    {
      id: '12',
      nev: 'Wonka Nerds Rope Rainbow Candy 26g',
      image: './assets/cukorImg/Wonka Nerds Rope Rainbow Candy 26g.jpg',
      leiras: 'A Wonka Nerds Rope Rainbow Candy egy színes, gumicukor alapú édesség, amelyet különböző ízű (szőlő, eper, citrom, narancs és egyéb gyümölcsös) apró, ropogós Nerds cukorkák borítanak, így kínálva egy komplex, többrétegű ízélményt.',
      ar: 990,
      darab: 1
    },
    {
      id: '13',
      nev: 'Skittles Fruits 38g',
      image: './assets/cukorImg/Skittles Fruits 38g.jpg',
      leiras: 'A Skittles Fruits egy élénk és gyümölcsös cukorkaválogatás, amely öt különböző ízzel biztosít vidám és édes rágási élményt.',
      ar: 360,
      darab: 1
    },
    {
      id: '14',
      nev: 'Skittles dóza 195g',
      image: './assets/cukorImg/Skittles dóza 195g.jpg',
      leiras: 'A Skittles dóza egy nagy kiszerelésű, színes és gyümölcsös cukorkaválogatás, amely vidám és édes ízélményt nyújt minden falatban.',
      ar: 3868,
      darab: 1
    },
    {
      id: '15',
      nev: 'Skittles Fruity Tea 40g',
      image: './assets/cukorImg/Skittles Fruity Tea 40g.jpg',
      leiras: 'A Skittles Fruity Tea egy gyümölcsös ízű tea, amely a Skittles édességeinek frissítő, édes és aromás változatát kínálja forró ital formájában.',
      ar: 990,
      darab: 1
    },
    {
      id: '16',
      nev: 'Bazooka Rattlerz Fruity Share Bag 100g',
      image: './assets/cukorImg/Bazooka Rattlerz Fruity Share Bag 100g.jpg',
      leiras: 'Változatos gyümölcsös ízek keveréke, intenzív és édes aromákkal.',
      ar: 1133,
      darab: 1
    },
    {
      id: '17',
      nev: 'Bazooka Rattlerz Fruity Bag 40g',
      image: './assets/cukorImg/Bazooka Rattlerz Fruity Bag 40g.jpg',
      leiras: 'Kompakt kiszerelésű, élénk gyümölcsös ízekkel teli rágócukorka.',
      ar: 304,
      darab: 1
    },
    {
      id: '18',
      nev: 'Bazooka Rattlerz Fruity Chewy Candies 120g',
      image: './assets/cukorImg/Bazooka Rattlerz Fruity Chewy Candies 120g.jpg',
      leiras: 'Puha, rágós textúrájú cukorkák gazdag, gyümölcsös ízvilággal.',
      ar: 1133,
      darab: 1
    },
    {
      id: '19',
      nev: 'Bazooka Rattlerz Fruity 12x120g',
      image: './assets/cukorImg/Bazooka Rattlerz Fruity 12x120g.jpg',
      leiras: 'Nagyobb kiszerelésű, változatos gyümölcsös ízeket tartalmazó csomag.',
      ar: 4100,
      darab: 1
    },
    {
      id: '20',
      nev: 'Bazooka Rattlerz Fruity Chewy Candy 10x18g',
      image: './assets/cukorImg/Bazooka Rattlerz Fruity Chewy Candy 10x18g.jpg',
      leiras: 'Egyéni csomagolású, gyümölcsös ízű rágócukorkák praktikus kiszerelésben.',
      ar: 1200,
      darab: 1
    },
    {
      id: '21',
      nev: 'Bazooka Juicy Drop Pop 26g',
      image: './assets/cukorImg/Bazooka Juicy Drop Pop 26g.jpg',
      leiras: 'Kemény nyalóka ízletes gyümölcsös ízekben, kiegészítve egy külön tartályban lévő savanyú folyadékkal, amit rá lehet csepegtetni a nyalókára az intenzívebb ízélményért.',
      ar: 950,
      darab: 1
    },
    {
      id: '22',
      nev: 'Bazooka Push Pop 15g',
      image: './assets/cukorImg/Bazooka Push Pop 15g.jpg',
      leiras: 'Nyomható nyalóka, amely lehetővé teszi, hogy élvezd az édes, gyümölcsös ízeket, majd elmentsd későbbre a praktikus tubusban.',
      ar: 490,
      darab: 1
    },
    {
      id: '23',
      nev: 'Bazooka Ring Pop 15g',
      image: './assets/cukorImg/Bazooka Ring Pop 15g.jpg',
      leiras: 'Gyűrű alakú nyalóka, amely intenzív gyümölcsös ízeket kínál, miközben játékos kiegészítőként is szolgál.',
      ar: 390,
      darab: 1
    }
  ];

  showNotification = false;

  constructor(private cartService: CartService, private cdr: ChangeDetectorRef) {}

  kosarbaRak(i: number) {
    const termek = this.gumicukrok[i];
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
        this.gumicukrok.sort((a, b) => a.ar - b.ar);
      } else if (order === 'high-to-low') {
        this.gumicukrok.sort((a, b) => b.ar - a.ar);
      }
    }

    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

