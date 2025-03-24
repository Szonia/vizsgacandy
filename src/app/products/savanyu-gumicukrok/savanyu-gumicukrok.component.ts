import { Component } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';
import { ChangeDetectorRef } from '@angular/core'; 


interface SavanyuGumicukrok {
  id: string;
  nev: string;
  image: string;
  leiras: string;
  ar: number;
  darab: number;
}

@Component({
  selector: 'app-gumicukor',
  templateUrl: './savanyu-gumicukrok.component.html',
  styleUrls: ['./savanyu-gumicukrok.component.css']
})
export class SavanyuGumicukrokComponent {
  gumicukrok: SavanyuGumicukrok[] = [
    {
      id: '1',
      nev: 'Sour Patch Kids Strawberry 102g',
      image: './assets/cukorImg/Sour Patch Kids Strawberry 102g.jpg',
      leiras: 'A Sour Patch Kids Strawberry egy savanyú-édes epres gumicukor, amely először intenzív savanyú bevonattal, majd fokozatosan édesedő eper ízvilággal lepi meg az ízlelőbimbókat.',
      ar: 1290,
      darab: 1
    },
    {
      id: '2',
      nev: 'Sour Patch Kids Cola Flavor 130g',
      image: './assets/cukorImg/Sour Patch Kids Cola Flavor 130g.jpg',
      leiras: 'A Sour Patch Kids Cola Flavor egy savanyú-édes gumicukor, amely a klasszikus kóla ízét idézi, először intenzív savanyú bevonattal, majd fokozatosan édesedő cola ízvilággal lepi meg az ízlelőbimbókat.',
      ar: 1390,
      darab: 1
    },
    {
      id: '3',
      nev: 'Sour Patch Kids Blue Raspberry 102g',
      image: './assets/cukorImg/Sour Patch Kids Blue Raspberry 102g.jpg',
      leiras: 'A Sour Patch Kids Blue Raspberry egy savanyú-édes gumicukor, amely a kék málna intenzív, frissítő ízét kínálja, először erős savanyú bevonattal, majd fokozatosan édesedő gyümölcsös ízvilággal lepi meg az ízlelőbimbókat.',
      ar: 1190,
      darab: 1
    },
    {
      id: '4',
      nev: 'Sour Patch Kids Lemonade Fest 102g',
      image: './assets/cukorImg/Sour Patch Kids Lemonade Fest 102g.jpg',
      leiras: 'A Sour Patch Kids Lemonade Fest egy négyféle limonádé ízű (eper limonádé, kék málna limonádé, meggy-lime limonádé és klasszikus limonádé) savanyú-édes gumicukor, amely először intenzív savanyú bevonattal, majd fokozatosan édesedő gyümölcsös limonádé ízvilággal lepi meg az ízlelőbimbókat.',
      ar: 1390,
      darab: 1
    },
    {
      id: '5',
      nev: 'Sour Patch Kids 99g',
      image: './assets/cukorImg/Sour Patch Kids 99g.jpg',
      leiras: 'A Sour Patch Kids egy extrém savanyú gumicukor, amely először intenzív savanyú bevonattal, majd fokozatosan édesedő gyümölcsös ízvilággal lepi meg az ízlelőbimbókat.',
      ar: 1290,
      darab: 1
    },
    {
      id: '6',
      nev: 'Sour Patch Kids Extreme 99g',
      image: './assets/cukorImg/Sour Patch Kids Extreme 99g.jpg',
      leiras: 'A Sour Patch Kids Extreme egy extrém savanyú gumicukor, amely először intenzív savanyú bevonattal lepi meg az ízlelőbimbókat, majd fokozatosan egy édes, gyümölcsös ízvilágba vált át, garantálva egy merész és izgalmas édességélményt.',
      ar: 1290,
      darab: 1
    },
    {
      id: '7',
      nev: 'Sour Patch Kids Candy Family Size 816g',
      image: './assets/cukorImg/Sour Patch Kids Candy Family Size 816g.jpg',
      leiras: 'A Sour Patch Kids Candy egy klasszikus, savanyú-édes gumicukor, amely citrom, lime, narancs és piros bogyós gyümölcs ízeket tartalmaz, először intenzív savanyú bevonattal, majd fokozatosan édesedő gyümölcsös ízvilággal lepi meg az ízlelőbimbókat.',
      ar: 6990,
      darab: 1
    },
    {
      id: '8',
      nev: 'Sour Patch Kids Watermelon 130g',
      image: './assets/cukorImg/Sour Patch Kids Watermelon 130g.jpg',
      leiras: 'A Sour Patch Kids Watermelon egy savanyú-édes gumicukor, amely a friss görögdinnye intenzív ízét kínálja, először erős savanyú bevonattal, majd fokozatosan édesedő gyümölcsös ízvilággal lepi meg az ízlelőbimbókat.',
      ar: 1790,
      darab: 1
    },
    {
      id: '9',
      nev: 'Sour Patch Kids Peach 102g',
      image: './assets/cukorImg/Sour Patch Kids Peach 102g.jpg',
      leiras: 'A Sour Patch Kids Peach egy savanyú-édes gumicukor, amely az érett őszibarack intenzív, friss gyümölcsös ízét kínálja, először erős savanyú bevonattal, majd fokozatosan édesedő barack ízvilággal lepi meg az ízlelőbimbókat.',
      ar: 1190,
      darab: 1
    },
    {
      id: '10',
      nev: 'Sour Patch Kids Red White & Blue 87g',
      image: './assets/cukorImg/Sour Patch Kids Red White & Blue 87g.jpg',
      leiras: 'A Sour Patch Kids Red White & Blue egy patrióta ihletésű, háromféle (piros, fehér és kék) gyümölcsös ízű gumicukor, amely először intenzív savanyú bevonattal, majd fokozatosan édesedő gyümölcsös ízvilággal lepi meg az ízlelőbimbókat.',
      ar: 1290,
      darab: 1
    },
    {
      id: '11',
      nev: 'Sour Patch Kids Christmas 88g',
      image: './assets/cukorImg/Sour Patch Kids Christmas 88g.jpg',
      leiras: 'A Sour Patch Kids Christmas egy ünnepi, piros és zöld színű gumicukor, amely a klasszikus savanyú-édes ízvilágot karácsonyi hangulatban kínálja, először intenzív savanyú bevonattal, majd fokozatosan édesedő gyümölcsös ízekkel lepi meg az ízlelőbimbókat.',
      ar: 1690,
      darab: 1
    },
    {
      id: '12',
      nev: 'Sour Patch Kids Fruit Mix 130g',
      image: './assets/cukorImg/Sour Patch Kids Fruit Mix 130g.jpg',
      leiras: 'A Sour Patch Kids Fruit Mix egy vegyes gyümölcs ízű gumicukor, amely cseresznye, alma, trópusi és feketeribizli ízeket tartalmaz, először intenzív savanyú bevonattal, majd fokozatosan édesedő gyümölcsös ízvilággal lepi meg az ízlelőbimbókat.',
      ar: 1490,
      darab: 1
    },
    {
      id: '13',
      nev: 'Sour Patch Kids Black Raspberry Sour Hearts 87g',
      image: './assets/cukorImg/Sour Patch Kids Black Raspberry Sour Hearts 87g.jpg',
      leiras: 'A Sour Patch Kids Black Raspberry Sour Hearts egy szív alakú, fekete málna ízű gumicukor, amely először intenzív savanyú bevonattal, majd fokozatosan édesedő gyümölcsös ízvilággal lepi meg az ízlelőbimbókat, tökéletes édességet kínálva Valentin-napra vagy bármilyen alkalomra.',
      ar: 1290,
      darab: 1
    },
    {
      id: '14',
      nev: 'Sour Patch Kids Original 130g',
      image: './assets/cukorImg/Sour Patch Kids Original 130g.jpg',
      leiras: 'A Sour Patch Kids Original egy klasszikus, gyümölcsös ízű gumicukor, amely először intenzív savanyú bevonattal lepi meg az ízlelőbimbókat, majd fokozatosan egy édes, nyúlós belsővel kínál élményt.',
      ar: 1490,
      darab: 1
    },
    {
      id: '15',
      nev: 'Sour Punch Bites Strawberry, Green Apple & Blue Raspberry Sour Gummy Candy 105g',
      image: './assets/cukorImg/Sour Punch Bites Strawberry, Green Apple & Blue Raspberry Sour Gummy Candy 105g.jpg',
      leiras: 'A Sour Punch Bites Strawberry, Green Apple & Blue Raspberry egy háromféle ízű (eper, zöldalma és kék málna) savanyú gumicukor, amely először intenzív savanyú cukorborítással, majd édes gyümölcsös ízvilággal lepi meg az ízlelőbimbókat.',
      ar: 1090,
      darab: 1
    },
    {
      id: '16',
      nev: 'Sour Punch Bites Rad Reds Fruity Gummy Candy 142g',
      image: './assets/cukorImg/Sour Punch Bites Rad Reds Fruity Gummy Candy 142g.jpg',
      leiras: 'A Sour Punch Bites Rad Reds egy gyümölcsös gumicukor, amely vörös gyümölcsök intenzív, savanyú-édes ízvilágát kínálja, először erős savanyú bevonattal, majd fokozatosan édesedő gyümölcsös ízekkel lepi meg az ízlelőbimbókat.',
      ar: 1390,
      darab: 1
    },
    {
      id: '17',
      nev: 'Sour Punch Mini Bites Fruit-Flavored Sour Gummy Candy 56g',
      image: './assets/cukorImg/Sour Punch Mini Bites Fruit-Flavored Sour Gummy Candy 56g.jpg',
      leiras: 'A Sour Punch Mini Bites Fruit-Flavored Sour Gummy Candy egy vegyes gyümölcs ízű, apró méretű savanyú gumicukor, amely először intenzív savanyú bevonattal, majd fokozatosan édesedő gyümölcsös ízvilággal lepi meg az ízlelőbimbókat.',
      ar: 1090,
      darab: 1
    },
    {
      id: '18',
      nev: 'Sour Punch Bites Blue Raspberry Sour Gummy Candy 105g',
      image: './assets/cukorImg/Sour Punch Bites Blue Raspberry Sour Gummy Candy 105g.jpg',
      leiras: 'A Sour Punch Bites Blue Raspberry Sour Gummy Candy egy intenzív kék málna ízű savanyú gumicukor, amely először erős savanyú bevonattal, majd fokozatosan édesedő gyümölcsös ízvilággal lepi meg az ízlelőbimbókat.',
      ar: 1190,
      darab: 1
    },
    {
      id: '19',
      nev: 'Warheads Care Bears Sour Grumpy Bears 99g',
      image: './assets/cukorImg/Warheads Care Bears Sour Grumpy Bears 99g.jpg',
      leiras: 'A Warheads Care Bears Sour Grumpy Bears egy intenzív kék málna ízű, extrém savanyú bevonattal ellátott gumicukor, amely először erős savanyúsággal, majd fokozatosan édesedő gyümölcsös ízvilággal lepi meg az ízlelőbimbókat.',
      ar: 1490,
      darab: 1
    },
    {
      id: '20',
      nev: 'Warheads Galactic Mix Cubes 127g',
      image: './assets/cukorImg/Warheads Galactic Mix Cubes 127g.jpg',
      leiras: 'A Warheads Galactic Mix Cubes egy űrtémájú, intenzíven savanyú gumicukor keverék, amely különböző gyümölcsös ízekben (mint például fekete cseresznye, kék málna és zöldalma) kínál extrém savanyú élményt, majd fokozatosan édesedő ízvilággal lepi meg az ízlelőbimbókat.',
      ar: 1990,
      darab: 1
    },
    {
      id: '21',
      nev: 'Warheads Ooze Chewz Sour Filled Candy 99g',
      image: './assets/cukorImg/Warheads Ooze Chewz Sour Filled Candy 99g.jpg',
      leiras: 'A Warheads Ooze Chewz Sour Filled Candy egy intenzíven savanyú, folyékony töltelékkel ellátott rágócukorka, amely először extrém savanyú ízrobbanással, majd fokozatosan édesedő gyümölcsös ízvilággal lepi meg az ízlelőbimbókat.',
      ar: 1390,
      darab: 1
    },
    {
      id: '22',
      nev: 'Warheads Wedgies Sour Chewy Candy 99g',
      image: './assets/cukorImg/Warheads Wedgies Sour Chewy Candy 99g.jpg',
      leiras: 'A Warheads Wedgies Sour Chewy Candy egy intenzíven savanyú, ék alakú rágós gumicukor, amely görögdinnye, puncs, limonádé és cseresznye ízekben kínál extrém savanyú élményt, majd fokozatosan édesedő gyümölcsös ízvilággal lepi meg az ízlelőbimbókat.',
      ar: 1290,
      darab: 1
    },
    {
      id: '23',
      nev: 'Warheads Sour Worms 99g',
      image: './assets/cukorImg/Warheads Sour Worms 99g.jpg',
      leiras: 'A Warheads Sour Worms egy intenzíven savanyú, kukac alakú gumicukor, amely többféle gyümölcsös ízben (mint zöldalma, fekete cseresznye és kék málna) kínál extrém savanyú élményt, majd fokozatosan édesedő ízvilággal lepi meg az ízlelőbimbókat.',
      ar: 1390,
      darab: 1
    },
    {
      id: '24',
      nev: 'Warheads Sour Cubes Sour Gummies 113g',
      image: './assets/cukorImg/Warheads Sour Cubes Sour Gummies 113g.jpg',
      leiras: 'A Warheads Sour Cubes Sour Gummies egy intenzíven savanyú, kocka alakú rágós gumicukor, amely öt különböző ízben (dinnye, eper, cseresznye, zöld alma és kék málna) kínál extrém savanyú élményt, majd fokozatosan édesedő gyümölcsös ízvilággal lep meg.',
      ar: 1390,
      darab: 1
    },
    {
      id: '25',
      nev: 'WarHeads Chewy Cubes Galactic Mix 99g',
      image: './assets/cukorImg/WarHeads Chewy Cubes Galactic Mix 99g.jpg',
      leiras: 'A WarHeads Chewy Cubes Galactic Mix egy űrtémájú, intenzíven savanyú, kocka alakú rágós gumicukor, amely különleges gyümölcsös ízekben (mint fekete cseresznye, kék málna és zöldalma) kínál extrém savanyú élményt, majd fokozatosan édesedő ízvilággal lepi meg az ízlelőbimbókat.',
      ar: 1390,
      darab: 1
    },
    {
      id: '26',
      nev: 'Warheads Sour Cubes Berry Mix 99g',
      image: './assets/cukorImg/Warheads Sour Cubes Berry Mix 99g.jpg',
      leiras: 'A Warheads Sour Cubes Berry Mix egy intenzíven savanyú, kocka alakú rágós gumicukor, amely különböző bogyós gyümölcsök ízében kínál extrém savanyú élményt, majd fokozatosan édesedő gyümölcsös ízvilággal lepi meg az ízlelőbimbókat.',
      ar: 1490,
      darab: 1
    },
    {
      id: '27',
      nev: 'Warheads Extreme Sour Hard Candy 92g',
      image: './assets/cukorImg/Warheads Extreme Sour Hard Candy 92g.jpg',
      leiras: 'A Warheads Extreme Sour Hard Candy egy intenzíven savanyú keménycukorka, amely öt különböző gyümölcsös ízben (zöldalma, fekete cseresznye, kék málna, citrom és görögdinnye) kínál extrém savanyú élményt, majd fokozatosan édes ízvilágba vált át.',
      ar: 1490,
      darab: 1
    },
    {
      id: '28',
      nev: 'Warheads Jelly Beans Sour Candy 113g',
      image: './assets/cukorImg/Warheads Jelly Beans Sour Candy 113g.jpg',
      leiras: 'A Warheads Jelly Beans Sour Candy egy intenzíven savanyú zselécukorka, amely hat megdöbbentően savanykás gyümölcsös ízben (narancs, görögdinnye, citrom, kék málna, cseresznye és zöld alma) kínál extrém savanyú élményt.',
      ar: 1090,
      darab: 1
    },
    {
      id: '29',
      nev: 'Warheads Cubes 141g',
      image: './assets/cukorImg/Warheads Cubes 141g.jpg',
      leiras: 'A Warheads Cubes egy intenzíven savanyú, kocka alakú rágós gumicukor, amely hat különböző gyümölcsös ízben (zöldalma, kék málna, eper, görögdinnye, narancs és fekete cseresznye) kínál extrém savanyú élményt, majd fokozatosan édesedő ízvilággal lepi meg az ízlelőbimbókat.',
      ar: 1690,
      darab: 1
    },
    {
      id: '30',
      nev: 'Warheads Cubes 99g',
      image: './assets/cukorImg/Warheads Cubes 99g.jpg',
      leiras: 'A Warheads Cubes egy intenzíven savanyú, kocka alakú rágós gumicukor, amely hat különböző gyümölcsös ízben (zöldalma, kék málna, eper, görögdinnye, narancs és fekete cseresznye) kínál extrém savanyú élményt, majd fokozatosan édesedő ízvilággal lepi meg az ízlelőbimbókat.',
      ar: 1490,
      darab: 1
    },
    {
      id: '31',
      nev: 'Warheads Mega Sour Bombs 71g',
      image: './assets/cukorImg/Warheads Mega Sour Bombs 71g.jpg',
      leiras: 'A Warheads Mega Sour Bombs egy extrém savanyú, bomba alakú kemény cukorka, amely intenzív gyümölcsös ízekben kínál megdöbbentően savanyú élményt, majd fokozatosan édesedő ízvilággal lepi meg az ízlelőbimbókat.',
      ar: 1690,
      darab: 1
    },
    {
      id: '32',
      nev: 'Warheads Sour Ooze Chewz Ropes Bag 85g',
      image: './assets/cukorImg/Warheads Sour Ooze Chewz Ropes Bag 85g.jpg',
      leiras: 'A Warheads Sour Ooze Chewz Ropes Bag egy intenzíven savanyú, rágós cukorka zsinór, amely görögdinnye, kék málna és zöldalma ízekben kínál extrém savanyú élményt, belsejében savanyú töltelékkel, majd fokozatosan édesedő ízvilággal lepi meg az ízlelőbimbókat.',
      ar: 1490,
      darab: 1
    },
    {
      id: '33',
      nev: 'Warheads Blue Raspberry Cubes 99g',
      image: './assets/cukorImg/Warheads Blue Raspberry Cubes 99g.jpg',
      leiras: 'A Warheads Blue Raspberry Cubes egy intenzíven savanyú, kék málna ízű kocka alakú gumicukor, amely először extrém savanyú élményt nyújt, majd fokozatosan édesedő gyümölcsös ízvilággal lepi meg az ízlelőbimbókat.',
      ar: 1390,
      darab: 1
    },
    {
      id: '34',
      nev: 'Warheads Extreme Sour Hard Candy 57g',
      image: './assets/cukorImg/Warheads Extreme Sour Hard Candy 57g.jpg',
      leiras: 'A Warheads Extreme Sour Hard Candy egy intenzíven savanyú keménycukorka, amely öt különböző gyümölcsös ízben (görögdinnye, alma, kék málna, citrom és fekete cseresznye) kínál extrém savanyú élményt, majd fokozatosan édes, gyümölcsös ízvilágba vált át.',
      ar: 1390,
      darab: 1
    },
    {
      id: '35',
      nev: 'Warheads Dipping Lollipop with Sour Powder 42g',
      image: './assets/cukorImg/Warheads Dipping Lollipop with Sour Powder 42g.jpg',
      leiras: 'A Warheads Dipping Lollipop with Sour Powder egy intenzív ízélményt nyújtó nyalóka, amely egy édes cukorka alapot és egy rendkívül savanyú port kombinál, lehetővé téve, hogy a fogyasztó a nyalókát a savanyú porba mártogassa, így fokozva az extrém savanyú-édes kontrasztot.',
      ar: 690,
      darab: 1
    },
    {
      id: '36',
      nev: 'Warheads Extreme Sour Extra Sour Candy Assorted Flavors 4g',
      image: './assets/cukorImg/Warheads Extreme Sour Extra Sour Candy Assorted Flavors 4g.jpg',
      leiras: 'A Warheads Mega Sour Bombs egy extrém savanyú, bomba alakú kemény cukorka, amely intenzív gyümölcsös ízekben kínál megdöbbentően savanyú élményt, majd fokozatosan édesedő ízvilággal lepi meg az ízlelőbimbókat.',
      ar: 99,
      darab: 1
    },
    {
      id: '37',
      nev: 'Bazooka Rattlerz Sour Chewy Candy 40g',
      image: './assets/cukorImg/Bazooka Rattlerz Sour Chewy Candy 40g.jpg',
      leiras: 'A Bazooka Rattlerz Sour Chewy Candy egy intenzíven savanyú, gyümölcsös ízű rágócukorka, amely édes, ropogós héjában savanyú porral van bevonva, és élénk, csípős savanyúságot kínál az ízlelőbimbóknak.',
      ar: 563,
      darab: 1
    },
    {
      id: '38',
      nev: 'Bazooka Rattlerz Sour Share Bag 120g',
      image: './assets/cukorImg/Bazooka Rattlerz Sour Share Bag 120g.jpg',
      leiras: 'Csípős, savanyú ízek kavalkádja, amely bizsergető érzést kelt a nyelven.',
      ar: 1133,
      darab: 1
    },
    {
      id: '39',
      nev: 'Bazooka Rattlerz Sour Chewy Candies 120g',
      image: './assets/cukorImg/Bazooka Rattlerz Sour Chewy Candies 120g.jpg',
      leiras: 'Savanyú, csípős ízű rágós cukorkák, amelyek intenzív ízélményt nyújtanak.',
      ar: 1133,
      darab: 1
    },
    {
      id: '40',
      nev: 'Toxic Waste Worms Sour Gummy 85g',
      image: './assets/cukorImg/Toxic Waste Worms Sour Gummy 85g.jpg',
      leiras: 'A Toxic Waste Worms Sour Gummy egy intenzíven savanyú, kukac alakú gumicukor, amely extrém savanyú bevonattal és erőteljes gyümölcsös ízvilággal lepi meg az ízlelőbimbókat.',
      ar: 1490,
      darab: 1
    },
    {
      id: '41',
      nev: 'Toxic Waste Worms Sour Gummy 142g',
      image: './assets/cukorImg/Toxic Waste Worms Sour Gummy 142g.jpg',
      leiras: 'A Toxic Waste Worms Sour Gummy egy intenzíven savanyú, kukac alakú gumicukor, amely öt különböző gyümölcsös ízben (eper, ananász, lime, kék málna és mandarin) kínál extrém savanyú élményt, rendkívül csípős bevonattal.',
      ar: 1290,
      darab: 1
    },
    {
      id: '42',
      nev: 'Toxic Waste Nuclear Fusion Sour Candy 57g',
      image: './assets/cukorImg/Toxic Waste Nuclear Fusion Sour Candy 57g.jpg',
      leiras: 'A Toxic Waste Nuclear Fusion Sour Candy egy extrém savanyú kemény cukorka, amely két különböző gyümölcsös íz merész kombinációját kínálja, amelyek egyszerre robbannak az ízlelőbimbókon, kétszeres intenzitású savanyú élményt nyújtva.',
      ar: 1190,
      darab: 1
    },
    {
      id: '43',
      nev: 'Toxic Waste Sour Smog Balls 85g',
      image: './assets/cukorImg/Toxic Waste Sour Smog Balls 85g.jpg',
      leiras: 'A Toxic Waste Sour Smog Balls egy extrém savanyú kemény cukorka, amely hat különböző gyümölcsös ízben (lime, cseresznye, eper, citrom, kék málna és szőlő) kínál intenzív savanyú élményt.',
      ar: 1490,
      darab: 1
    },
    {
      id: '44',
      nev: 'Toxic Waste Smog Balls Sour Candy 48g',
      image: './assets/cukorImg/Toxic Waste Smog Balls Sour Candy 48g.jpg',
      leiras: 'A Toxic Waste Smog Balls Sour Candy egy extrém savanyú kemény cukorka, amely hat különböző gyümölcsös ízben (lime, cseresznye, eper, citrom, kék málna és szőlő) kínál intenzív savanyú élményt, ropogós külső borítással és savanyú folyékony töltelékkel.',
      ar: 790,
      darab: 1
    },
    {
      id: '45',
      nev: 'Toxic Waste Atomic Bytes Sour Hard Candy 60g',
      image: './assets/cukorImg/Toxic Waste Atomic Bytes Sour Hard Candy 60g.jpeg',
      leiras: 'A Toxic Waste Atomic Bytes Sour Hard Candy egy extrém savanyú keménycukorka, amely öt különböző gyümölcsös ízben (alma, görögdinnye, sötét cseresznye, oregoni málna és citrom) kínál intenzív savanyú élményt, amelynek íze fokozatosan bontakozik ki a fogyasztás során.',
      ar: 590,
      darab: 1
    },
    {
      id: '46',
      nev: 'Toxic Waste Yellow Drum Extreme Sour Candy 42g',
      image: './assets/cukorImg/Toxic Waste Yellow Drum Extreme Sour Candy 42g.jpg',
      leiras: 'Klasszikus sárga dobozos változat, amely öt ultra-savanyú ízt tartalmaz: alma, fekete cseresznye, görögdinnye, citrom és kék málna.',
      ar: 790,
      darab: 1
    },
    {
      id: '47',
      nev: 'Toxic Waste Green Drum Extreme Sour Candy 42g',
      image: './assets/cukorImg/Toxic Waste Green Drum Extreme Sour Candy 42g.jpg',
      leiras: 'Zöld dobozos változat, amely öt új savanyú ízt kínál: lime, kiwi, dinnye, zöldalma és zöld körte.',
      ar: 790,
      darab: 1
    },
    {
      id: '48',
      nev: 'Toxic Waste Red Drum Extreme Sour Candy 42g',
      image: './assets/cukorImg/Toxic Waste Red Drum Extreme Sour Candy 42g.jpg',
      leiras: 'Piros dobozos változat, amely öt további savanyú ízt tartalmaz: málna, áfonya, piros körte, eper és piros szőlő.',
      ar: 790,
      darab: 1
    },
    {
      id: '49',
      nev: 'Toxic Waste Purple Drum Extreme Sour Candy 42g',
      image: './assets/cukorImg/Toxic Waste Purple Drum Extreme Sour Candy 42g.jpg',
      leiras: 'Lila dobozos változat, amely négy új savanyú ízt kínál: áfonya, szeder, fekete cseresznye és szőlő.',
      ar: 790,
      darab: 1
    },
    {
      id: '50',
      nev: 'Toxic Waste Nuclear Sludge Chew Bar Sour Green Apple 20g',
      image: './assets/cukorImg/Toxic Waste Nuclear Sludge Chew Bar Sour Green Apple 20g.jpg',
      leiras: 'Savanyú zöldalma ízű rágható cukorka rúd formában.',
      ar: 199,
      darab: 1
    },
    {
      id: '51',
      nev: 'Toxic Waste Blue Raspberry Flavored Chewy Candy 20g',
      image: './assets/cukorImg/Toxic Waste Blue Raspberry Flavored Chewy Candy 20g.jpg',
      leiras: 'Intenzív kék málna ízű, savanyú rágós cukorka, amely a Toxic Waste márka jellegzetes erős, savanyú ízélményét nyújtja.',
      ar: 199,
      darab: 1
    },
    {
      id: '52',
      nev: 'Skittles Crazy Sours 38g',
      image: './assets/cukorImg/Skittles Crazy Sours 38g.jpg',
      leiras: 'A Skittles Crazy Sours egy élénk és savanyú gyümölcsízű cukorkaválogatás, amely intenzív és frissítő ízélményt nyújt minden falatban.',
      ar: 299,
      darab: 1
    },
    {
      id: '53',
      nev: 'Skittles Crazy Sours 136g',
      image: './assets/cukorImg/Skittles Crazy Sours 136g.jpg',
      leiras: 'A Skittles Crazy Sours egy nagyobb kiszerelésű, savanyú gyümölcsízű cukorkaválogatás, amely intenzív és frissítő ízekkel garantálja a hosszan tartó élvezetet.',
      ar: 980,
      darab: 1
    },
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