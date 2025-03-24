
import { Component } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';
import { ChangeDetectorRef } from '@angular/core';

interface Chips {
  id: string;
  nev: string;
  image: string;
  leiras: string;
  ar: number;
  darab: number;
}

@Component({
  selector: 'app-chipsek',
  templateUrl: './chipsek.component.html',
  styleUrls: ['./chipsek.component.css']
})
export class ChipsekComponent {
  chipsek: Chips[] = [
    {
      id: '1',
      nev: 'Pringles Texas BBQ Sauce 165g',
      image: './assets/chipsImg/Pringles Texas BBQ Sauce 165g.jpg',
      leiras: 'Izvilág: csípős paradicsomszósz, fűszerek és füstös barbecue íz.',
      ar: 1049,
      darab: 1
    },
    {
      id: '2',
      nev: 'Pringles Paprika 130g',
      image: './assets/chipsImg/Pringles Paprika 130g.jpg',
      leiras: 'A Pringles Paprika egy pikáns-édeskés, füstös paprika ízű chips, amely ropogós állagával és intenzív fűszerezésével kínál egy karakteres snack élményt, amelyben az édes és paprikás jegyek harmonikusan keverednek.',
      ar: 1049,
      darab: 1
    },
    {
      id: '3',
      nev: 'Pringles Original 165g',
      image: './assets/chipsImg/Pringles Original 165g.jpg',
      leiras: 'Klasszikus, semleges ízű Pringles, amely az alapvető snackélményt nyújtja.',
      ar: 1699,
      darab: 1
    },
    {
      id: '4',
      nev: 'Pringles Sour Cream & Onion 165g',
      image: './assets/chipsImg/Pringles Sour Cream & Onion 165g.jpg',
      leiras: 'Észbontóan hagymás-tejfölös ízvilág, amely a Pringles egyik legnépszerűbb ízesítése.',
      ar: 1699,
      darab: 1
    },
    {
      id: '5',
      nev: 'Pringles Hot & Spicy 165g',
      image: './assets/chipsImg/Pringles Hot & Spicy 165g.jpg',
      leiras: 'Csípős, fűszeres íz, amely azoknak való, akik szeretik a tüzes snackeket.',
      ar: 1699,
      darab: 1
    },
    {
      id: '6',
      nev: 'Pringles Ranch 165g',
      image: './assets/chipsImg/Pringles Ranch 165g.jpg',
      leiras: 'Krémes, sajtos ízű Pringles, amely a klasszikus ranch mártást idézi.',
      ar: 1699,
      darab: 1
    },
    {
      id: '7',
      nev: 'Pringles Jalapeño 165g',
      image: './assets/chipsImg/Pringles Jalapeño 165g.jpg',
      leiras: 'Csípős jalapeño ízű Pringles, amely azoknak való, akik szeretik a fűszeres snackeket.',
      ar: 1699,
      darab: 1
    },
    {
      id: '8',
      nev: 'Pringles Pizza 165g',
      image: './assets/chipsImg/Pringles Pizza 165g.jpg',
      leiras: 'Olasz ízvilágot idéző Pringles, amely a pizza klasszikus ízeit ötvözi.',
      ar: 1699,
      darab: 1
    },
    {
      id: '9',
      nev: 'Fűszeres Pringles Cheddar Cheese 165g',
      image: './assets/chipsImg/Pringles Cheddar Cheese 165g.jpg',
      leiras: 'Intenzív sajtos ízű Pringles, amely a cheddar sajt rajongóinak való.',
      ar: 1699,
      darab: 1
    },
    {
      id: '10',
      nev: 'Pringles Scorchin Sour Cream & Onion 165g',
      image: './assets/chipsImg/Pringles Scorchin Sour Cream & Onion 165g.jpg',
      leiras: 'A klasszikus Sour Cream & Onion íz csípősebb változata.',
      ar: 1699,
      darab: 1
    },
    {
      id: '11',
      nev: 'Pringles Loaded Potato Skins 165g',
      image: './assets/chipsImg/Pringles Loaded Potato Skins 165g.jpg',
      leiras: 'Új, limitált kiadású íz, amely a töltött krumplihéj ízeit idézi, sajttal, vajjal és szalonnás aromával.',
      ar: 1699,
      darab: 1
    },
    {
      id: '12',
      nev: 'Chazz Flaming Ghost Potato Chips 50g',
      image: './assets/chipsImg/Chazz Flaming Ghost Potato Chips 50g.jpg',
      leiras: 'A Chazz Flaming Ghost Potato Chips egy rendkívül csípős burgonyachips, amely 0,8% Naga Jolokia és Scotch Bonnet paprikát tartalmaz, intenzív fűszerezéssel és olyan erős hőhatással, amely váratlanul "kísért meg" mint egy szellem.',
      ar: 990,
      darab: 1
    },
    {
      id: '13',
      nev: 'Hot Chip Challenge Purple Edition 2,5g',
      image: './assets/chipsImg/Hot Chip Challenge Purple Edition 2,5g.jpg',
      leiras: 'A Hot Chip Challenge Purple Edition egy extrém csípős kukoricachips, amely a világ legerősebb paprikáinak (Carolina Reaper, Trinidad Moruga Scorpion, Naga Bhut Jolokia) keverékével készül, amely 2 200 000 Scoville-egységnyi intenzív, égető csípősséget biztosít egyetlen falatban.',
      ar: 3690,
      darab: 1
    },
    { id: '14',
      nev: 'Takis Blue Heat Spicy Mexican Chips 92g',
      image: './assets/chipsImg/Takis Blue Heat Spicy Mexican Chips 92g.jpg',
      leiras: 'A Takis Blue Heat egy rendkívül csípős mexikói chips, amely vibráns kék színben és intenzív, pikáns fűszerezésben tündököl, lime és chili paprika keverékével kínálva egy merész és tűzforró ízélményt.',
      ar: 1990,
      darab: 1
    },
    {
      id: '15',
      nev: 'Takis Guacamole Mexico 70g',
      image: './assets/chipsImg/Takis Guacamole Mexico 70g.jpg',
      leiras: 'A Takis Guacamole Mexico egy csípős, guacamole ízesítésű kukoricás tortilla chips, amely valódi avokádó és fűszerkeverék felhasználásával készül, intenzív mexikói ízvilágot és enyhe csípősséget kínálva.',
      ar: 1390,
      darab: 1
    },
    { id: '16',
      nev: 'Takis Queso Volcano Chips 90g',
      image: './assets/chipsImg/Takis Queso Volcano Chips 90g.jpg',
      leiras: 'A Takis Queso Volcano Chips egy intenzív, csípős sajtos tortilla chips, amely a sajt és chili fűszerek tűzforró kombinációját kínálja, vulkanikus ízvilágot teremtve egyetlen harapásban.',
      ar: 1690,
      darab: 1
    },
    {
      id: '17',
      nev: 'Takis Fuego Hot Chips 90g',
      image: './assets/chipsImg/Takis Fuego Hot Chips 90g.jpg',
      leiras: 'A Takis Fuego Hot Chips egy rendkívül csípős mexikói tortilla chips, amely a chili és lime tűzforró kombinációjával kínál intenzív, pikáns ízélményt, csavart taco formában, a mexikói konyha szenvedélyes karakterét idézve.',
      ar: 1690,
      darab: 1
    },
    {
      id: '18',
      nev: 'Takis Nitro 113g',
      image: './assets/chipsImg/Takis Nitro 113g.jpg',
      leiras: 'Intenzív habanero chili ízesítésű tekercs, fekete-piros csomagolásban, enyhén füstös aromával.',
      ar: 1990,
      darab: 1
    },
    {
      id: '19',
      nev: 'Takis Crunchy Fajita 92g',
      image: './assets/chipsImg/Takis Crunchy Fajita 92g.jpg',
      leiras: 'Taco fűszerezésre emlékeztető ízvilágú tekercs, köménymagos aromával és enyhe savanyú utóízzel.',
      ar: 2363,
      darab: 1
    },
    {
      id: '20',
      nev: 'Takis Dragon Sweet Chili 90g',
      image: './assets/chipsImg/Takis Dragon Sweet Chili 90g.jpg',
      leiras: 'Édes-csípős ízesítésű tekercs, amely a Sweet Chili Doritos rajongóinak is ízleni fog.',
      ar: 1990,
      darab: 1
    },
    {
      id: '21',
      nev: 'Takis Intense Nacho 92g',
      image: './assets/chipsImg/Takis Intense Nacho 92g.jpg',
      leiras: 'Sajtos ízesítésű, nem csípős változat, amely a klasszikus nachos ízét idézi.',
      ar: 2190,
      darab: 1
    },
    {
      id: '22',
      nev: 'Takis Zombie 92g',
      image: './assets/chipsImg/Takis Zombie 92g.jpg',
      leiras: 'Habanero és uborka ízesítésű tekercs, fekete-zöld csomagolásban.',
      ar: 1990,
      darab: 1
    },
    {
      id: '23',
      nev: 'Takis Waves Fuego 190g',
      image: './assets/chipsImg/Takis Waves Fuego 190g.jpg',
      leiras: 'Hullámos burgonyachips változat a klasszikus Fuego ízesítéssel.',
      ar: 1473,
      darab: 1
    },
    {
      id: '24',
      nev: 'Takis Hot Nuts Fuego 90g',
      image: './assets/chipsImg/Takis Hot Nuts Fuego 90g.jpg',
      leiras: 'Ropogós kukoricabevonattal ellátott földimogyoró, a Fuego ízesítéssel.',
      ar: 1490,
      darab: 1
    },
    {
      id: '25',
      nev: 'Takis Stix Fuego 280g',
      image: './assets/chipsImg/Takis Stix Fuego 280g.jpg',
      leiras: 'Vékony kukorica rudacskák a klasszikus Fuego ízesítéssel, intenzívebb chili és lime aromával.',
      ar: 1513,
      darab: 1
    },
    {
      id: '26',
      nev: 'Cheetos Crunchy Cheddar Jalapeño Chips 226g',
      image: './assets/chipsImg/Cheetos Crunchy Cheddar Jalapeño Chips 226g.jpg',
      leiras: 'Tökéletes egyensúly a sajtos és csípős ízek között, intenzív jalapeño aromával.',
      ar: 1990,
      darab: 1
    },
    {
      id: '27',
      nev: 'Cheetos Japan Steak Flavor Chips 90g',
      image: './assets/chipsImg/Cheetos Japan Steak Flavor Chips 90g.jpg',
      leiras: 'A Cheetos Japan Steak Flavor Chips egy különleges, japán steak ízvilágát idéző kukoricás snack, amely a hagyományos japán marhahús zamatos, fűszeres ízét kombinálja a Cheetos jellegzetes ropogós textúrájával.',
      ar: 1690,
      darab: 1
    },
    {
      id: '28',
      nev: 'Cheetos Flamin Hot Crunchy 226g',
      image: './assets/chipsImg/Cheetos Flamin Hot Crunchy 226g.jpg',
      leiras: 'Ikonikus csípős íz, amely rendkívül népszerű a rajongók körében',
      ar: 3490,
      darab: 1
    },
    {
      id: '29',
      nev: 'Cheetos Puffs 226g',
      image: './assets/chipsImg/Cheetos Puffs 226g.jpg',
      leiras: 'Klasszikus sajtos íz könnyű, levegős textúrával, amely sokak gyerekkori kedvence.',
      ar: 3990,
      darab: 1
    },
    {
      id: '30',
      nev: 'Cheetos Flamin Hot Puffs 226g',
      image: './assets/chipsImg/Cheetos Flamin Hot Puffs 226g.jpg',
      leiras: 'A népszerű csípős íz puffasztott változata, amely még intenzívebb ízélményt nyújt.',
      ar: 3490,
      darab: 1
    },
    {
      id: '31',
      nev: 'Cheetos Popcorn Cheddar 17g',
      image: './assets/chipsImg/Cheetos Popcorn Cheddar 17g.jpg',
      leiras: 'Sajtos ízesítésű pattogatott kukorica, amely ötvözi a Cheetos és a popcorn legjobb tulajdonságait.',
      ar: 3090,
      darab: 1
    },
    {
      id: '32',
      nev: 'Cheetos Simply Puffs White Cheddar 70g',
      image: './assets/chipsImg/Cheetos Simply Puffs White Cheddar 70g.jpg',
      leiras: 'Fehér cheddar sajttal ízesített puffasztott kukoricasnack.',
      ar: 4090,
      darab: 1
    },
    {
      id: '33',
      nev: 'Cheetos Fantastix Chili Cheese 28g',
      image: './assets/chipsImg/Cheetos Fantastix Chili Cheese 28g.jpg',
      leiras: 'Vékony, pálcika alakú snack intenzív sajtízzel.',
      ar: 3250,
      darab: 1
    },
    {
      id: '34',
      nev: 'Cheetos Crunchetos Sweet Chili flavour 110g',
      image: './assets/chipsImg/Cheetos Crunchetos Sweet Chili flavour 110g.jpg',
      leiras: 'Nagyobb méretű, ropogós kukoricachips édes-csípős chili ízesítéssel.',
      ar: 240,
      darab: 1
    },
    {
      id: '35',
      nev: 'Cheetos Crunchy Xxtra Flamin Hot Cheese Flavored 240g',
      image: './assets/chipsImg/Cheetos Crunchy Xxtra Flamin Hot Cheese Flavored 240g.jpg',
      leiras: 'Ropogós kukoricachips édes-csípős chili aromával, intenzív ízélményt nyújtva.',
      ar: 7380,
      darab: 1
    },
    {
      id: '36',
      nev: 'Cheetos Beef and Onions Flavor 40g',
      image: './assets/chipsImg/Cheetos Beef and Onions Flavor 40g.jpg',
      leiras: 'Még csípősebb változata a klasszikus Flamin Hot íznek.',
      ar: 2330,
      darab: 1
    },
    {
      id: '37',
      nev: 'Cheetos Big Chipito Sweet Chilli flavour 100g',
      image: './assets/chipsImg/Cheetos Big Chipito Sweet Chilli flavour 100g.jpg',
      leiras: 'Ropogós kukoricasnack intenzív marhahús és hagyma ízesítéssel, kisebb kiszerelésben.',
      ar: 990,
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


