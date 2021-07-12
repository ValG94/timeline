import { Component, OnInit } from '@angular/core';
import {CardsService} from "../cards.service";
import {Cards} from "../Cards";
import {FormBuilder} from "@angular/forms";


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

// cards: Array<{id: number, name: string, date: number, imageUrl: string, description: string }> = [
//   {id: 1, name: 'Yahoo', date: 1995, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Yahoo%21_%282019%29.svg', description: 'Un des tous premiers moteurs de recherche' },
//   {id: 2, name: 'Ipad', date: 2010, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/IPad_3.png', description: 'La première tablette numérique' },
//   {id: 3, name: 'Snapchat', date: 2011, imageUrl: 'https://upload.wikimedia.org/wikipedia/fr/a/ad/Logo-Snapchat.png', description: 'Pour ceux qui ont peur que les photos restent ...' },
//   {id: 4, name: 'Amazon', date: 1994, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg', description: 'Le commerce en ligne' },
//   {id: 5, name: 'Minitel', date: 1980, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Minitel_terminal.jpg', description: 'La création du Minitel en France' },
// ];

  // Déclaration de mes 3 tableaux utilisable dans mon HTML
  cards: Cards[] = [];

  cardToGuess: any;

  guessedCards: Cards[] = [];

  //Déclaration de ma variable pour afficher la date d'une carte
  showDate: boolean | undefined;

  //Déclaration d'un formulaire pour isoler la date à trouver sur le bouton deviner
  guessForm = this.formBuilder.group({
    date: ''
  });

  guess(){
   var annee= new Date(this.cardToGuess?.date).getFullYear();
      console.log (this.guessForm.get('date')?.value)
      if(annee == this.guessForm.get('date')?.value){
        console.log("Vous avez trouvé la bonne réponse")
        //permet de mettre la carte du tableau Cards dans le tableau guessCards
        this.guessedCards.push(this.cardToGuess)
        //permet de trier mes cartes dans l'ordre chronologique
        this.guessedCards.sort(function compare(a,b){
          if (a.date<b.date)
            return -1;
            return 1;
        })
        //permet de vider le champ du formulaire date
        this.guessForm.get('date')?.reset()
        // @ts-ignore
        //permet de supprimer la carte qui vient du tableau cards et qui s'affiche désormais dans le tableau cardToGuess
        this.cardToGuess=this.cards.shift()

      }else
        console.log("Perdu !")
  }
  constructor(private cardsService : CardsService, private formBuilder : FormBuilder) { }

  ngOnInit(): void {

    //Composant Cards appelle le service cardsService. Le service appelle l'API
    this.cardsService.getCards().subscribe(play =>{
      this.cards=play
      this.cardToGuess = this.cards.shift();
      console.log(this.cardToGuess.date);
    })
  }
}
