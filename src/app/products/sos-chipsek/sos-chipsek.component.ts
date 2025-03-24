import { Component } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';
import { ChangeDetectorRef } from '@angular/core'; 


interface SosChipsek {
  id: string;
  nev: string;
  image: string;
  leiras: string;
  ar: number;
  darab: number;
}

@Component({
  selector: 'app-sos-chipsek',
  templateUrl: './sos-chipsek.component.html',
  styleUrls: ['./sos-chipsek.component.css']
})
export class SosChipsekComponent {
  chipsek: SosChipsek[] = [
    {
      id: '1',
      nev: 'Cheetos Japan Steak Flavor Chips 90g',
      image: './assets/chipsImg/Cheetos Japan Steak Flavor Chips 90g.jpg',
      leiras: 'A Cheetos Japan Steak Flavor Chips egy különleges, japán steak ízvilágát idéző kukoricás snack, amely a hagyományos japán marhahús zamatos, fűszeres ízét kombinálja a Cheetos jellegzetes ropogós textúrájával.',
      ar: 1690,
      darab: 1
    },
    {
      id: '2',
      nev: 'Pringles Texas BBQ Sauce 165g',
      image: './assets/chipsImg/Pringles Texas BBQ Sauce 165g.jpg',
      leiras: 'A Pringles Texas BBQ Sauce egy csípős paradicsomszósz, fűszerek és füstös barbecue íz kombinációját kínáló chips, amely merész és intenzív ízélményt nyújt a klasszikus Pringles chipsek ropogós textúrájával.',
      ar: 1049,
      darab: 1
    },
    {
      id: '3',
      nev: 'Pringles Paprika 130g',
      image: './assets/chipsImg/Pringles Paprika 130g.jpg',
      leiras: 'A Pringles Paprika egy pikáns-édeskés, füstös paprika ízű chips, amely ropogós állagával és intenzív fűszerezésével kínál egy karakteres snack élményt, amelyben az édes és paprikás jegyek harmonikusan keverednek.',
      ar: 1049,
      darab: 1
    },
    {
      id: '4',
      nev: 'Takis Intense Nacho 92g',
      image: './assets/chipsImg/Takis Intense Nacho 92g.jpg',
      leiras: 'Sajtos ízesítésű, nem csípős változat, amely a klasszikus nachos ízét idézi.',
      ar: 2190,
      darab: 1
    },
    {
      id: '5',
      nev: 'Cheetos Puffs 226g',
      image: './assets/chipsImg/Cheetos Puffs 226g.jpg',
      leiras: 'Klasszikus sajtos íz könnyű, levegős textúrával, amely sokak gyerekkori kedvence.',
      ar: 3990,
      darab: 1
    },
    {
      id: '6',
      nev: 'Cheetos Popcorn Cheddar 17g',
      image: './assets/chipsImg/Cheetos Popcorn Cheddar 17g.jpg',
      leiras: 'Sajtos ízesítésű pattogatott kukorica, amely ötvözi a Cheetos és a popcorn legjobb tulajdonságait.',
      ar: 3090,
      darab: 1
    },
    {
      id: '7',
      nev: 'Cheetos Simply Puffs White Cheddar 70g',
      image: './assets/chipsImg/Cheetos Simply Puffs White Cheddar 70g.jpg',
      leiras: 'Fehér cheddar sajttal ízesített puffasztott kukoricasnack.',
      ar: 4090,
      darab: 1
    },
    {
      id: '8',
      nev: 'Cheetos Beef and Onions Flavor 40g',
      image: './assets/chipsImg/Cheetos Beef and Onions Flavor 40g.jpg',
      leiras: 'Ropogós kukoricasnack intenzív marhahús és hagyma ízesítéssel, kisebb kiszerelésben.',
      ar: 2330,
      darab: 1
    },
    {
      id: '9',
      nev: 'Pringles Original 165g',
      image: './assets/chipsImg/Pringles Original 165g.jpg',
      leiras: 'Klasszikus, semleges ízű Pringles, amely az alapvető snackélményt nyújtja.',
      ar: 1699,
      darab: 1
    },
    {
      id: '10',
      nev: 'Pringles Sour Cream & Onion 165g',
      image: './assets/chipsImg/Pringles Sour Cream & Onion 165g.jpg',
      leiras: 'Észbontóan hagymás-tejfölös ízvilág, amely a Pringles egyik legnépszerűbb ízesítése.',
      ar: 1699,
      darab: 1
    },
    {
      id: '11',
      nev: 'Pringles Ranch 165g',
      image: './assets/chipsImg/Pringles Ranch 165g.jpg',
      leiras: 'Krémes, sajtos ízű Pringles, amely a klasszikus ranch mártást idézi.',
      ar: 1699,
      darab: 1
    },
    {
      id: '12',
      nev: 'Pringles Pizza 165g',
      image: './assets/chipsImg/Pringles Pizza 165g.jpg',
      leiras: 'Olasz ízvilágot idéző Pringles, amely a pizza klasszikus ízeit ötvözi.',
      ar: 1699,
      darab: 1
    },
    {
      id: '13',
      nev: 'Fűszeres Pringles Cheddar Cheese 165g',
      image: './assets/chipsImg/Pringles Cheddar Cheese 165g.jpg',
      leiras: 'Intenzív sajtos ízű Pringles, amely a cheddar sajt rajongóinak való.',
      ar: 1699,
      darab: 1
    },
    {
      id: '14',
      nev: 'Pringles Scorchin Sour Cream & Onion 165g',
      image: './assets/chipsImg/Pringles Scorchin Sour Cream & Onion 165g.jpg',
      leiras: 'A klasszikus Sour Cream & Onion íz csípősebb változata.',
      ar: 1699,
      darab: 1
    },
    {
      id: '15',
      nev: 'Pringles Loaded Potato Skins 165g',
      image: './assets/chipsImg/Pringles Loaded Potato Skins 165g.jpg',
      leiras: 'Új, limitált kiadású íz, amely a töltött krumplihéj ízeit idézi, sajttal, vajjal és szalonnás aromával.',
      ar: 1699,
      darab: 1
    }
  ];

  showNotification = false;

  constructor(private cartService: CartService, private cdr: ChangeDetectorRef) {}

  kosarbaRak(i: number) {
    const termek = this.chipsek[i];
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
        this.chipsek.sort((a, b) => a.ar - b.ar);
      } else if (order === 'high-to-low') {
        this.chipsek.sort((a, b) => b.ar - a.ar);
      }
    }

    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
