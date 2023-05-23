import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  projects: Array<Project> = [
    {
      id: 1,
      name: "Stage - Axxes",
      functions: ["React-Native Front-end developer", "Python developer"],
      text: [
        "De ontwikkeling van een nieuwe feature voor de interne applicatie van Axxes.", 
        "Axxes is een IT consultancy bedrijf dat zeer hard inzet op de jobtevredenheid van zijn werknemers. Daarom heeft Axxes mij, samen met 2 andere stagaires, de taak gegeven om voor elke werknemer een gepersonalisseerde 'year-in-review' te maken. In dit jaaroverzicht kan de werknemer dan zien wat zij het voorbije jaar gedaan hebben. Hier worden dan ook zijn projecten kort toegelicht en een aantal foto's getoond van de verschillende evenementen waar deze persoon heen is geweest.",
        "Voor Axxes was het daarnaast ook super belangrijk dat dit niet iets eenmalig was en dat dit dus automatisch elk jaar gegenereerd kan worden. Wij hebben dan uiteindelijk een python script geschreven dat dit kan bereiken."
      ],
      tasks: ["Spotify wrapped achtig jaaroverzicht voor elke individuele werknemer", "Automatisch genereren van gepersonalisseerde videos"],
      skills: ["React Native", "HTML/SASS/JS", "Python", "Azure DevOps", "TypeScript/JavaScript", "Docker", "Presenteren", "Teamwerk"],
      result: "",
      picture: "assets/images/Axxes.jpg",
      showDetails: true
    }, 
    {
      id: 2,
      name: "Angular - .NET lab",
      functions: ["Angular Full-stack developer"],
      text: [
        "De ontwikkeling van een webapplicatie waarbij er gepronostikeerd kan worden.", 
        "Bij DotNET Lab zijn ze constant op zoek naar manieren om een goede teamsfeer te creëren onder de collega's. Toen in 2022 de FIFA World Cup ging beginnen, leek het hen een leuk idee om een applicatie te ontwikkelen waarin elke collega de uitslag van de wedstrijd kan voorspellen.",
        "Zo kan elk bedrijf een voorspellingsgroep aanmaken voor evenementen zoals het WK voetbal in Qatar. In deze groep kunnen alle collega's dan de uitkomst van de wedstrijden voorspellen. We hebben dn ook een klassement geïntegreerd om op basis van de verdiende punten een overzicht te krijgen van wie er het beste is in het voorspellen."
      ],
      tasks: ["Authenticatie (admin, managar, gebruiker, gast)", "Ontwikkelen van een simpel, duidelijk en mooi UI in AngularJS", "Ontwikkelen van een aanpasbaar en schaalbare API in .NET"],
      skills: [".NET/C#", "SCSS", "AngularJS", "Presenteren", "Teamwerk"],
      result: "",
      picture: "assets/images/NET.jpg",
      showDetails: false
    },
    {
      id: 3,
      name: "Project 4.0 - Monitoring van oogst",
      functions: ["React-Native Full-stack developer"],
      text: [
        "De ontwikkeling van een mobiele- en webapplicatie waarmee de oogst (van aardbeien) gemonitord kan worden.", 
        "",
        "",
        ""
      ],
      tasks: ["Taak 1", "Taak 2", "Taak 3"],
      skills: ["React Native", "Python", "AI", "Presenteren", "Teamwerk"],
      result: "",
      picture: "assets/images/vito.png",
      showDetails: false
    },
    {
      id: 4,
      name: "Flutter - Augmented Reality",
      functions: ["Flutter developer"],
      text: [
        "Voor het OPO 'Mobile Development' heb ik samen met een klasgenoot een Flutter applicatie gemaakt.",
        "In deze applicatie moesten we Augmented Reality gebruiken. Voor de rest hebben wij voor deze taak vrij-spel gekregen van onze leerkrachten.",
        "Wij hebben ervoor gekozen om een applicatie te maken waarmee we een bioscoop bezoek makkelijker en beter wilde maken. Veel mensen die een cinema binnenlopen weten echter nog niet welke film ze gaan zien. Om deze keuze makkelijker te maken hebben wij een applicatie gemaakt met een ingebouwde camera. Wanneer de camera een cinema poster ziet, zal deze gescand worden en zal de trailer automatisch beginnen spelen. Daarnaast is het dan ook een mogelijkheid om naar de website van de bioscoop te gaan om tickets te kopen voor deze film."
      ],
      tasks: ["Ontwikkelen van een Cross-Platform applicatie in Flutter", "AR (Augmented Reality) toevoegen en gebruiken ivm de Wikitude Plugin"],
      skills: ["Mobile development", "Flutter", "Wikitude SDK", "AR", "Teamwerk"],
      result: "", 
      picture: "assets/images/flutter.png",
      showDetails: false
    },
    {
      id: 5,
      name: "Salesforce - Business case",
      functions: ["Salesforce developer"],
      text: [
        "Voor het OPO 'Enterprise Development Experience' heb ik in een groep van 4 een salesforce applicatie gemaakt.",
        "Voor onze klant 'Equibel' hadden we de opdracht gekregen om ondersteuning te bieden aan het sales-process van hun paardentrailers en campers. Dit met een aantal (26) user stories, een CRM foundation, Reports & Dashboards en het nodige Data management.",
        "Naast deze taak hebben wij ook een aantal salesforce-trailheads moeten doen. Hier ben ik echter niet gestopt, ik heb toen namelijk de badge 'DOUBLE STAR RANGER' gehaald. Een badge die volgens onze lesgevers zeer moeilijk te behalen was."
      ],
      tasks: ["Ondersteunen van een sales proces"],
      skills: ["Salesforce", "Presenteren", "Teamwerk"],
      result: "", 
      picture: "assets/images/salesforce.jpg",
      showDetails: false
    }
  ]

  public getProjects(): Array<Project>{
    return this.projects;
  }
}
