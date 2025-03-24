import { Component } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';
import { ChangeDetectorRef } from '@angular/core'; 

interface EdesUditok {
  id: string;
  nev: string;
  image: string;
  leiras: string;
  ar: number;
  darab: number;
}

@Component({
  selector: 'app-uditok',
  templateUrl: './edes-uditok.component.html',
  styleUrls: ['./edes-uditok.component.css']
})
export class EdesUditokComponent {
  uditok: EdesUditok[] = [
    {
      id: '1',
      nev: 'Prime Hydration Drink Glowberry 500ml',
      image: './assets/uditokImg/Prime Hydration Drink Glowberry 500ml.jpg',
      leiras: 'A Prime Hydration Glowberry egy alma-, lime- és kivi ízű, szénsavmentes üdítőital, amelyet édesítőszerekkel és hozzáadott vitaminokkal készítenek.',
      ar: 3990,
      darab: 1
    },
    {
      id: '2',
      nev: 'Prime Hydration Drink Strawberry Watermelon 500ml',
      image: './assets/uditokImg/Prime Hydration Drink Strawberry Watermelon 500ml.jpg',
      leiras: 'A Prime Hydration Strawberry Watermelon egy üdítőital, amelyben az érett, édes eper karakteres íze harmonikusan találkozik a friss görögdinnye savanykás, felfrissítő ízével.',
      ar: 1490,
      darab: 1
    },
    {
      id: '3',
      nev: 'Prime Hydration Drink Ice Pop 500ml',
      image: './assets/uditokImg/Prime Hydration Drink Ice Pop 500ml.jpg',
      leiras: 'A Prime Hydration Ice Pop egy hűsítő, édes jégkrém ízű üdítőital, amely frissítő és gyümölcsös karakterrel rendelkezik.',
      ar: 1790,
      darab: 1
    },
    {
      id: '4',
      nev: 'Prime Hydration Drink Blue Raspberry 500ml',
      image: './assets/uditokImg/Prime Hydration Drink Blue Raspberry 500ml.jpg',
      leiras: 'A Prime Hydration Blue Raspberry egy élénk kék színű, intenzív málna ízű üdítőital, amely tökéletes egyensúlyt teremt az édes és a savanykás ízjegyek között.',
      ar: 990,
      darab: 1
    },
    {
      id: '5',
      nev: 'Prime Hydration Drink Lemon Lime 500ml',
      image: './assets/uditokImg/Prime Hydration Drink Lemon Lime 500ml.jpg',
      leiras: 'A Prime Hydration Lemon Lime egy frissítő citrusos ital, amely tökéletes egyensúlyt teremt a citrom savanykás és a lime üdítő íze között, kellemes és élénkítő ízélményt nyújtva.',
      ar: 990,
      darab: 1
    },
    {
      id: '6',
      nev: 'Prime Hydration Drink Grape 500ml',
      image: './assets/uditokImg/Prime Hydration Drink Grape 500ml.jpg',
      leiras: 'A Prime Hydration Grape egy intenzív, édes szőlő ízű üdítőital, amely a friss szőlő zamatos és üdítő ízvilágát kínálja minden kortyban.',
      ar: 990,
      darab: 1
    },
    {
      id: '7',
      nev: 'Prime Hydration Drink UFC 300 500ml',
      image: './assets/uditokImg/Prime Hydration Drink UFC 300 500ml.jpg',
      leiras: 'A Prime Hydration UFC 300 egy limitált kiadású, egyedi ízesítésű üdítőital, amely a UFC 300 esemény tiszteletére készült, és egy izgalmas, energiával teli ízkombinációt kínál.',
      ar: 4990,
      darab: 1
    },
    {
      id: '8',
      nev: 'Prime Hydration Drink Strawberry Banana 500ml',
      image: './assets/uditokImg/Prime Hydration Drink Strawberry Banana 500ml.jpg',
      leiras: 'A Prime Hydration Strawberry Banana egy harmonikus ízélményt nyújt, amelyben az érett eper édessége tökéletesen ötvöződik a krémes banán ízével, frissítő és gyümölcsös karaktert kölcsönözve az italnak.',
      ar: 4990,
      darab: 1
    },
    {
      id: '9',
      nev: 'Prime Hydration Drink Auston Matthews 500ml',
      image: './assets/uditokImg/Prime Hydration Drink Auston Matthews 500ml.jpg',
      leiras: 'A Prime Hydration Auston Matthews egy limitált kiadású, jégkorong-inspirálta üdítőital, amely frissítő és energizáló ízkombinációt kínál, tükrözve a jégkorong sztár dinamikus játékstílusát.',
      ar: 3990,
      darab: 1
    },
    {
      id: '10',
      nev: 'Prime Hydration Drink WWE 500ml',
      image: './assets/uditokImg/Prime Hydration Drink WWE 500ml.jpg',
      leiras: 'A Prime Hydration WWE egy különleges kiadású, pankráció-inspirálta üdítőital, amely intenzív és robbanékony ízkombinációt kínál, tükrözve a WWE látványos és energikus világát.',
      ar: 3790,
      darab: 1
    },
    {
      id: '11',
      nev: 'Prime Hydration Drink Toronto Raptors Black 500ml',
      image: './assets/uditokImg/Prime Hydration Drink Toronto Raptors Black 500ml.jpg',
      leiras: 'A Prime Hydration Toronto Raptors Black egy limitált kiadású, kosárlabda-inspirálta üdítőital, amely intenzív, fekete színű megjelenésével és egyedi ízkombinációjával tiszteleg a Toronto Raptors csapata előtt.',
      ar: 3990,
      darab: 1
    },
    {
      id: '12',
      nev: 'Prime Hydration Drink Central Cee 500ml',
      image: './assets/uditokImg/Prime Hydration Drink Central Cee 500ml.jpg',
      leiras: 'A Prime Hydration Central Cee egy limitált kiadású, brit rapper Central Cee által inspirált üdítőital, amely egyedi és merész ízkombinációt kínál, tükrözve a művész innovatív és energikus stílusát.',
      ar: 3490,
      darab: 1
    },
    {
      id: '13',
      nev: 'Prime Hydration Drink LAKERS 500ml',
      image: './assets/uditokImg/Prime Hydration Drink LAKERS 500ml.jpg',
      leiras: 'A Prime Hydration LAKERS egy limitált kiadású, kosárlabda-inspirálta üdítőital, amely a Los Angeles Lakers csapatának tiszteletére készült, és egy frissítő, lila-arany színvilágú ízkombinációt kínál.',
      ar: 4590,
      darab: 1
    },
    {
      id: '14',
      nev: 'Prime Hydration Drink Kevin Durant 500ml',
      image: './assets/uditokImg/Prime Hydration Drink Kevin Durant 500ml.jpg',
      leiras: 'A Prime Hydration Kevin Durant egy limitált kiadású, kosárlabda-sztár inspirálta üdítőital, amely dinamikus és intenzív ízkombinációt kínál, tükrözve Durant robbanékony játékstílusát a pályán.',
      ar: 4590,
      darab: 1
    },
    {
      id: '15',
      nev: 'Prime Hydration Drink Barcelona 500ml',
      image: './assets/uditokImg/Prime Hydration Drink Barcelona 500ml.jpg',
      leiras: 'A Prime Hydration Barcelona egy limitált kiadású, futball-inspirálta üdítőital, amely a híres katalán klub színeiben pompázik, és egy frissítő, mediterrán ízvilágot kínál, tükrözve a csapat szenvedélyes és dinamikus játékstílusát.',
      ar: 3490,
      darab: 1
    },
    {
      id: '16',
      nev: 'Prime Hydration Drink Meta Moon 500ml',
      image: './assets/uditokImg/Prime Hydration Drink Meta Moon 500ml.jpg',
      leiras: 'A Prime Hydration Meta Moon egy titokzatos és futurisztikus ízű üdítőital, amely egyedi, gyümölcsös jegyekkel nyújt izgalmas és frissítő élményt.',
      ar: 1790,
      darab: 1
    },
    {
      id: '17',
      nev: 'Arizona Marvel LXR Hero Hydration Peach Mango 473ml',
      image: './assets/uditokImg/Arizona Marvel LXR Hero Hydration Peach Mango 473ml.jpg',
      leiras: 'Az Arizona Marvel LXR Hero Hydration Peach Mango egy szuperhős-inspirálta üdítőital, amely a zamatos őszibarack és az egzotikus mangó édes ízeinek harmonikus keverékét kínálja, elektrolitokkal és vitaminokkal dúsítva.',
      ar: 2200,
      darab: 1
    },
    {
      id: '18',
      nev: 'Arizona Cherry Lime Rickey 650ml',
      image: './assets/uditokImg/Arizona Cherry Lime Rickey 650ml.jpg',
      leiras: 'Az Arizona Cherry Lime Rickey egy frissítő, enyhén savanykás cseresznye és lime ízű üdítőital, amely tökéletesen kiegyensúlyozza az édes és citrusos ízeket egy élénk és ínycsiklandó italban.',
      ar: 990,
      darab: 1
    },
    {
      id: '19',
      nev: 'Arizona Frost Chillzicle 650ml',
      image: './assets/uditokImg/Arizona Frost Chillzicle 650ml.jpg',
      leiras: 'Az Arizona Frost Chillzicle egy hűsítő és frissítő üdítő, amely az élénk gyümölcsízeket és a jeges frissességet ötvözi, tökéletes választás a forró napokra.',
      ar: 990,
      darab: 1
    },
    {
      id: '20',
      nev: 'Arizona Green Tea with Ginseng and Honey 650ml',
      image: './assets/uditokImg/Arizona Green Tea with Ginseng and Honey 650ml.jpg',
      leiras: 'Klasszikus zöld tea méz és ginzeng ízesítéssel, amely az Arizona legismertebb és legnépszerűbb terméke.',
      ar: 990,
      darab: 1
    },
    {
      id: '21',
      nev: 'Arizona Arnold Palmer Half & Half Iced Tea Lemonade 650ml',
      image: './assets/uditokImg/Arizona Arnold Palmer Half & Half Iced Tea Lemonade 650ml.jpg',
      leiras: 'Fekete tea és limonádé keveréke, amely Arnold Palmer golfozó nevét viseli.',
      ar: 990,
      darab: 1
    },
    {
      id: '22',
      nev: 'Arizona Mucho Mango 650ml',
      image: './assets/uditokImg/Arizona Mucho Mango 650ml.jpg',
      leiras: 'Intenzív mangó ízű gyümölcsital.',
      ar: 990,
      darab: 1
    },
    {
      id: '23',
      nev: 'Arizona Watermelon 650ml',
      image: './assets/uditokImg/Arizona Watermelon 650ml.jpg',
      leiras: 'Frissítő görögdinnye ízű ital.',
      ar: 990,
      darab: 1
    },
    {
      id: '24',
      nev: 'Arizona Fruit Punch 650ml',
      image: './assets/uditokImg/Arizona Fruit Punch 650ml.jpg',
      leiras: 'Többféle gyümölcs ízét ötvöző üdítőital.',
      ar: 990,
      darab: 1
    },
    {
      id: '25',
      nev: 'Arizona Blueberry White Tea 500ml',
      image: './assets/uditokImg/Arizona Blueberry White Tea 500ml.jpg',
      leiras: 'Áfonyás fehér tea, amely kellemes gyümölcsös ízt kínál.',
      ar: 990,
      darab: 1
    },
    {
      id: '26',
      nev: 'Arizona Pomegranate Green Tea 500ml',
      image: './assets/uditokImg/Arizona Pomegranate Green Tea 500ml.jpg',
      leiras: 'Gránátalmás zöld tea, amely ötvözi a zöld tea és a gránátalma jótékony hatásait.',
      ar: 990,
      darab: 1
    },
    {
      id: '27',
      nev: 'Arizona Cowboy Cocktail Kiwi Strawberry 500ml',
      image: './assets/uditokImg/Arizona Cowboy Cocktail Kiwi Strawberry 500ml.jpg',
      leiras: 'Kivi és eper ízesítésű gyümölcskoktél.',
      ar: 990,
      darab: 1
    },
    {
      id: '28',
      nev: 'Fanta Berry 355ml',
      image: './assets/uditokImg/Fanta Berry 355ml.jpg',
      leiras: 'A Fanta Berry egy bogyós gyümölcsök ízét idéző, frissítő szénsavas üdítőital, amely az áfonya és más erdei gyümölcsök édes-savanykás ízvilágát kínálja.',
      ar: 680,
      darab: 1
    },
    {
      id: '29',
      nev: 'Fanta Fruit Twist 330ml',
      image: './assets/uditokImg/Fanta Fruit Twist 330ml.jpg',
      leiras: 'A Fanta Fruit Twist egy izgalmas, többféle gyümölcs ízét ötvöző szénsavas üdítőital, amely a narancs, ananász és maracuja trópusi keverékét kínálja, frissítő és élénk ízélményt nyújtva.',
      ar: 690,
      darab: 1
    },
    {
      id: '30',
      nev: 'Fanta Grape 355ml',
      image: './assets/uditokImg/Fanta Grape 355ml.jpg',
      leiras: 'A Fanta Grape egy intenzív, édes szőlő ízű szénsavas üdítőital, amely a friss szőlő zamatos és üdítő ízvilágát kínálja, jellegzetes lila színével és buborékos frissességével.',
      ar: 680,
      darab: 1
    },
    {
      id: '31',
      nev: 'Fanta Strawberry 350ml',
      image: './assets/uditokImg/Fanta Strawberry 350ml.jpg',
      leiras: 'A Fanta Strawberry egy édes és zamatos, eper ízű szénsavas üdítőital, amely a friss, érett eprek ízvilágát idézi, üdítő buborékokkal és élénk rózsaszín színnel.',
      ar: 680,
      darab: 1
    },
    {
      id: '32',
      nev: 'Fanta Peach 355ml',
      image: './assets/uditokImg/Fanta Peach 355ml.jpg',
      leiras: 'A Fanta Peach egy zamatos, őszibarack ízű szénsavas üdítőital, amely a frissen szedett, érett őszibarack édes és aromás ízvilágát kínálja, üdítő buborékokkal és kellemes narancssárga színnel.',
      ar: 680,
      darab: 1
    },
    {
      id: '33',
      nev: 'Fanta Strawberry Kiwi Soda 330ml',
      image: './assets/uditokImg/Fanta Strawberry Kiwi Soda 330ml.jpg',
      leiras: 'A Fanta Strawberry Kiwi Soda egy frissítő szénsavas üdítőital, amely az édes eper és a savanykás kivi ízének harmonikus kombinációját kínálja, egyedi és egzotikus ízélményt nyújtva.',
      ar: 480,
      darab: 1
    },
    {
      id: '34',
      nev: 'Fanta Exotic 330ml',
      image: './assets/uditokImg/Fanta Exotic 330ml.jpg',
      leiras: 'A Fanta Exotic egy trópusi gyümölcsök ízvilágát idéző szénsavas üdítőital, amely egzotikus gyümölcsök, mint a maracuja, guava és ananász harmonikus keverékét kínálja, egyedi és izgalmas ízélményt nyújtva.',
      ar: 480,
      darab: 1
    },
    {
      id: '35',
      nev: 'Fanta Pineapple Soda 355ml',
      image: './assets/uditokImg/Fanta Pineapple Soda 355ml.jpg',
      leiras: 'A Fanta Pineapple Soda egy trópusi hangulatot idéző szénsavas üdítőital, amely az érett, zamatos ananász édes és enyhén savanykás ízét kínálja, frissítő buborékokkal és napfényes sárga színnel.',
      ar: 680,
      darab: 1
    },
    {
      id: '36',
      nev: 'Fanta Green Apple 185ml',
      image: './assets/uditokImg/Fanta Green Apple 185ml.jpg',
      leiras: 'A Fanta Green Apple egy élénk és frissítő zöldalma ízű szénsavas ital, amely édes és enyhén savanykás ízvilágával igazi üdítő élményt nyújt.',
      ar: 1290,
      darab: 1
    },
    {
      id: '37',
      nev: 'Chinese Fanta White Peach 330ml',
      image: './assets/uditokImg/Chinese Fanta White Peach 330ml.jpg',
      leiras: 'A Chinese Fanta White Peach egy üdítően édes és zamatos fehér őszibarack ízű szénsavas ital, amely frissítően gyümölcsös élményt nyújt.',
      ar: 790,
      darab: 1
    },
    {
      id: '38',
      nev: 'Skittles Drink Original 414ml',
      image: './assets/uditokImg/Skittles Drink Original 414ml.jpg',
      leiras: 'A Skittles Drink Original egy egyedi, színes cukorkák által inspirált üdítőital, amely a klasszikus Skittles cukorka öt gyümölcsös ízét (eper, citrom, lime, narancs és szőlő) kombinálja egy édes és frissítő italban.',
      ar: 1780,
      darab: 1
    },
    {
      id: '39',
      nev: 'Skittles Drink Wild Berry 414ml',
      image: './assets/uditokImg/Skittles Drink Wild Berry 414ml.jpg',
      leiras: 'A Skittles Drink Wild Berry egy izgalmas, bogyós gyümölcsök ízvilágát idéző üdítőital, amely a Skittles Wild Berry cukorka változatosságát tükrözi, ötvözve a szeder, vad eper, vad cseresznye, málna és áfonya édes és zamatos ízeit egy frissítő italban.',
      ar: 1790,
      darab: 1
    },
    {
      id: '40',
      nev: 'Skittles Drink Tropical 414ml',
      image: './assets/uditokImg/Skittles Drink Tropical 414ml.jpg',
      leiras: 'A Skittles Drink Tropical egy egzotikus, trópusi gyümölcsök ízvilágát idéző üdítőital, amely a Skittles Tropical cukorka változatosságát tükrözi, ötvözve a kiwi, lime, ananász, mangó és papaya édes és frissítő ízeit egy üdítő italban.',
      ar: 1790,
      darab: 1
    },
    {
      id: '41',
      nev: 'Skittles Tropical Liquid Water Enhancer 48ml',
      image: './assets/uditokImg/Skittles Tropical Liquid Water Enhancer 48ml.jpg',
      leiras: 'A Skittles Tropical Liquid Water Enhancer egy trópusi gyümölcsízű, folyékony italízesítő, amely néhány cseppel feldobja a vizet, édes és gyümölcsös frissességet biztosítva.',
      ar: 4510,
      darab: 1
    },
    {
      id: '42',
      nev: 'Skittles Tropical Punch flavored drink powder, 6-pack',
      image: './assets/uditokImg/Skittles Tropical Punch flavored drink powder, 6-pack.jpg',
      leiras: 'A Skittles Tropical Punch trópusi puncs ízű italpor egy egzotikus gyümölcsök édes és frissítő ízét hozza el, könnyen elkészíthető, ízesített üdítő formájában.',
      ar: 1416,
      darab: 1
    },
    {
      id: '43',
      nev: 'Skittles Wild Berry Water Enhancer 48ml',
      image: './assets/uditokImg/Skittles Wild Berry Water Enhancer 48ml.jpg',
      leiras: 'A Skittles Tropical Punch trópusi puncs ízű italpor egy egzotikus gyümölcsök édes és frissítő ízét hozza el, könnyen elkészíthető, ízesített üdítő formájában.',
      ar: 2573,
      darab: 1
    },
    {
      id: '44',
      nev: 'Ghost Hydration Drink Kiwi Strawberry 500ml',
      image: './assets/uditokImg/Ghost Hydration Drink Kiwi Strawberry 500ml.jpg',
      leiras: 'Intenzív, édes-savanykás eper íz autentikus kivi aromával kiegészítve.',
      ar: 7411,
      darab: 1
    },
    {
      id: '45',
      nev: 'Ghost Hydration Drink Blue Raspberry 500ml',
      image: './assets/uditokImg/Ghost Hydration Drink Blue Raspberry 500ml.jpg',
      leiras: 'Édes-savanyú kék málna íz, amely a népszerű cukorkát idézi.',
      ar: 7411,
      darab: 1
    },
    {
      id: '46',
      nev: 'Ghost Hydration Drink Lemon Crush 500ml',
      image: './assets/uditokImg/Ghost Hydration Drink Lemon Crush 500ml.jpg',
      leiras: 'Intenzív citromos íz narancs aromával kiegészítve, frissítő citrusos élményt nyújtva.',
      ar: 7411,
      darab: 1
    },
    {
      id: '47',
      nev: 'Ghost Hydration Drink Tropical Mango 500ml',
      image: './assets/uditokImg/Ghost Hydration Drink Tropical Mango 500ml.jpg',
      leiras: 'Édeskés mangó íz enyhe ananász és narancs aromával, trópusi hangulatot idézve.',
      ar: 7411,
      darab: 1
    },
    {
      id: '48',
      nev: 'Ghost Hydration Drink Cherry Limeade 500ml',
      image: './assets/uditokImg/Ghost Hydration Drink Cherry Limeade 500ml.jpg',
      leiras: 'Erőteljes cseresznye íz frissítő lime utóízzel, tökéletes egyensúlyban.',
      ar: 7411,
      darab: 1
    },
    {
      id: '49',
      nev: 'Ghost Hydration Drink Citrus 500ml',
      image: './assets/uditokImg/Ghost Hydration Drink Citrus 500ml.jpg',
      leiras: 'Frissítő, kiegyensúlyozott citrusfélék keveréke, amely több citrusgyümölcs ízét ötvözi.',
      ar: 7411,
      darab: 1
    },
    {
      id: '50',
      nev: 'Ghost Hydration Drink Orange Cream 500ml',
      image: './assets/uditokImg/Ghost Hydration Drink Orange Cream 500ml.jpg',
      leiras: 'Krémes, édes narancsos íz vaníliás beütéssel, amely a klasszikus narancskrémes fagylaltra emlékeztet.',
      ar: 7411,
      darab: 1
    },
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




  
