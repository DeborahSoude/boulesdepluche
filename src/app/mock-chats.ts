import {Chat} from './chat';

export const CHAT: Array<Chat> = [
    {
        nom : "Foka",
        surnom: "Patate",
        naissance: new Date("2017-09-01"),
        race: "Écailles de tortue diluées",
        sexe : "Femelle",
        caractere: "Après le dodo, la guerre...",
        description: "Foka a été recueillie avec sa fratrie dans une petite commune des Corbières.?? Son frère Titus a été adopté très rapidement car déjà tout petit il était proche de l'humain. Foka étant un peu plus traumatisée?? pas son début d'existence, sa confiance envers nous a pris un peu plus de temps. Maintenant, avec encore un peu de patience, elle devient une super minette, câline et intéressante. Si elle a un petit jardin , elle n'en sera que plus heureuse et vous remerciera de ses câlins toute sa vie.",
        vaccin: true,
        puce: true,
        sterilisation: true,
        okEnfants: false,
        okChats: true,
        okChiens: true,
        photo: "../assets/img/foka.jpg",
        illustration: "../assets/img/foka.svg",
        section: "Curieux",
    },
    {
        nom : "Yoda",
        surnom: "Crevette",
        naissance: new Date("2015-10-01"),
        race: "Oriental",
        sexe : "Mâle",
        caractere: "Patati et patata, toute la journée ça n'arrête pas, faut faire le ménage, le ménage et le ménage. On frotte, on gratte, partout. ",
        description: "Yoda est un chat adorable, de nature plutôt calme il aime se faire câliner. Toutefois c'est un chat actif qui aura besoin de se dépenser. Une vie en appartement ou en maison pourra lui convenir. C'est un chat très propre qui peut accepter la présence de congénères et la présence d'enfant au foyer.",
        vaccin: true,
        puce: true,
        sterilisation: true,
        okEnfants: true,
        okChats: true,
        okChiens: true,
        photo: "../assets/img/yoda.jpg",
        illustration: "../assets/img/yoda.svg",
        section: "Dormeurs",
    },
    {
        nom : "Wally",
        surnom: "Bibou",
        naissance: new Date("2020-05-01"),
        race: "Européen poils courts",
        sexe : "Mâle",
        caractere: "Même s'il est 7h, j'ai faim !",
        description: "Wally est à l'adoption suite à l'hospitalisation de son propriétaire. En grand manque de calîns et de contact, Wally aura besoin d'une famille présente, dynamique pour lui apporter jeux et amour pour son épanouissement. Wally est un grand gourmand et un petit voleur ! :)",
        vaccin: true,
        puce: true,
        sterilisation: true,
        okEnfants: true,
        okChats: true,
        okChiens: false,
        photo: "../assets/img/wally.jpg",
        illustration: "../assets/img/wally.svg",
        section: "Gourmands",
    }

]