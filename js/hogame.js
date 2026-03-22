// hogame.js

let inventory = [];
let cluesGiven = {}; // prevents clue spam
let sceneUnlocked = {
  door: true // starting scene is always unlocked
};

const CASES = [
  {
    key: "missing_financial_statement",
    title: "The Missing Financial Statement",
    requiredDocs: [
      "phone","log","label","page","invoice","approval","envelop",
      "journal","request","so","po","binder","papers",
      "workorder","breakdown","financialstatement"
    ],
    successText: "You recovered the missing document and got the financial statement done in time! ERP updated, books balanced... Case closed.",
    solved: false
  }
];

let currentCaseIndex = 0;

/* ---------------------------------------------------------
   COLLECT DOCUMENT
--------------------------------------------------------- */

function collectDocument(obj) {
  // Already collected? STOP.
  if (inventory.find(d => d.id === obj.id)) return;

  inventory.push(obj);
  updateERPInventory();

  // Send clue for next scene ONCE
  if (obj.next) sendPreSceneClue(obj.next);

  // Special final message
  if (obj.id === "financialstatement") {
    sendEmail("You found it. Upload it to ERP immediately.");
  }
}

/* ---------------------------------------------------------
   SEND CLUE BEFORE NEXT SCENE
--------------------------------------------------------- */

function sendPreSceneClue(nextScene) {
  if (cluesGiven[nextScene]) return;
  cluesGiven[nextScene] = true;
    
sceneUnlocked[nextScene] = false; // lock it until clue is read

  switch (nextScene) {
    case "reception":
      sendTeams("9:00 Receptionist: Come here quickly... There was a suspicious visitor, he left an envelope for your. Check the visitor log.");
      cluesGiven[nextScene] = "teams";
      break;

    case "warehouse":
      sendTeams("9:30 Logistics: Someone carried a sealed envelope past by me. Come to the Warehouse, there are some envelopes scattered around.");
      cluesGiven[nextScene] = "teams";
      break;

    case "garden":
      sendPhone("10:00 Collegue: Hello? How're you? Someone told me you're looking for a missing document. I was by the garden and I saw a person holding a white piece of paper, like a white page. I hope it helps.");
      cluesGiven[nextScene] = "phone";
      break;

    case "canteen":
      sendTeams("10:30 Canteen Worker: I'm here at the Canteen and someone just commented you found a document. Is it a letter? It might be mine, do you mind bring it to me?");
      cluesGiven[nextScene] = "teams";
      break;

    case "ap":
      sendEmail("11:00 Hello Consultant,  Welcome to the Accounting Team. I was informed by the canteen worker that you found a Purchasing Invoice.  Could you bring it to Accounts Payable Department?  I have the approval for this invoice.  Thanks, AP Specialist");
      cluesGiven[nextScene] = "email";
      break;

    case "ar":
      sendEmail("11:30 Dear Consultant,  I hope it finds you well. Someone delivered an envelop here, I thought it was my Sales Order but it's not. You can collect it her at the Accounts Receivable Department and see if it is your missing document.  Best regards,  AR Assistant ");
      cluesGiven[nextScene] = "email";
      break;

    case "gl":
      sendTeams("12:00 GL Controler: Hi, I heard your're looking for a missing document, look someone was digging through the journal entries and they left a mess, do you want check it out? I'm pretty sure it's the mysterious person that's on the loose, who did it.");
      cluesGiven[nextScene] = "teams";
      break;

    case "manager":
      sendEmail("12:30 Hi Consultant, My assistant just told me that a fake payment request was found on her desk and it has to be dealt with.  The mysterious visitor may have been here. Feel free to come and collect it at your convenience. Best regards, Finance Manager");
      cluesGiven[nextScene] = "email";
      break;

    case "sales":
      sendTeams("13:00 Salesperson: Sales found some files that don't belong here. We don't know who brought them. Someone was trying to hide something here.");
      cluesGiven[nextScene] = "teams";
      break;

    case "purchasing":
      sendPhone("14:00 Purchasing Team: Hi, is this the Consultant? Please, come to Purchasing when you have a spare time, we found some folders that could have your missing document inside. We're here till 5pm.");
      cluesGiven[nextScene] = "phone";
      break;

    case "vat":
      sendTeams("14:30 Taxes Guy: VAT binders were moved. Someone hid something here. I know you're looking for a missing document since morning, come here and check if by any chance the mysterious visitor is the one who's messing with our things.");
      cluesGiven[nextScene] = "teams";
      break;

    case "ceo":
      sendPhone("15:00 CEO's Office: This is an automated communication: the CEO's office was broken into. Something important was searched for. Everybody is requested to be on the lookout for an leather brown agenda. When found, please return to the CEO's office urgently.");
      cluesGiven[nextScene] = "phone";
      break;

    case "production":
      sendTeams("15:30 Production Guy: Production thought a work order was left behind but it's not our stationary. Someone passed through and left this strange document here, feel free to come and check it out. Today we leave at 4:30 pm for berevement/personal reasons.");
      cluesGiven[nextScene] = "teams";
      break;

    case "maintenance":
      sendPhone("16:00 Maintenance Worker: I saw someone leaving by the back gate, an unusual way to leave the premises. I guess it's the mysterious visitor everybody is talking about. By the way there's  financial report here on my quarter, I got it by mistake when I collected the mail from the reception. Only now I made the connection, it's your missing document!");
      cluesGiven[nextScene] = "phone";
      break;
          
    case "desk":
      sendPhone("16:30 Myself: I'm ready, I got the missing document... heading to my desk now. After all the chase I can finally finish the financial statement.");
      cluesGiven[nextScene] = "phone";
      break;
  }
}
