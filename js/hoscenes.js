// hoscenes.js

/* ---------------------------------------------------------
   SCENE DEFINITIONS
--------------------------------------------------------- */

const SCENES = {
  door: {
    title: "Main Entrance",
    image: "images/door+.jpg",
    hint: "Another day, another dime. I'm already late... Quite sure there are people looking for you at the office.",
    objects: [
      {
        img: "images/objects/phone.jpg",
        x: 49.05, y: 62.75,
        next: "reception"
      }
    ]
  },

  reception: {
    title: "Reception",
    image: "images/reception.jpg",
    hint: "Somene drop a document for you but it's not here now, I looked everywhere. Check the visitor log and find out who's the mysterious visitor...",
    objects: [
      {
        img: "images/objects/log.jpg",
        x: 62.5, y: 47.55,
        next: "warehouse"
      }
    ]
  },

  warehouse: {
    title: "Warehouse",
    image: "images/warehouse.jpg",
    hint: "Worker: Look around, see if you can find the envelopes, I just found some torn label. It could that the document delivered at the reception earlier is among them...",
    objects: [
      {
        img: "images/objects/label.jpg",
        x: 85, y: 77.5,
        next: "garden"
      }
    ]
  },

  garden: {
    title: "Garden",
    image: "images/garden.jpg",
    hint: "Colleage: There was someone here, that I've never seen before, I don't think they work here. They dropped this page and I picked it up, looks like a document of some sorts. Is this what've been looking all morning? Take it...",
    objects: [
      {
        img: "images/objects/page.jpg",
        x: 85, y: 75.5,
        next: "canteen"
      }
    ]
  },

  canteen: {
    title: "Canteen",
    image: "images/canteen.jpg",
    hint: "Barist: Thanks for bringing me that, but it's not my letter. I saw another document like this one laying around here, I thought to myself: it's not a place for a document like that. Find it, it could be the document you're looking for.",
    objects: [
      {
        img: "images/objects/invoice.jpg",
        x: 15.5, y: 34,
        next: "ap"
      }
    ]
  },

    ap: {
    title: "Accounts Payable",
    image: "images/ap.jpg",
    hint: "AP Clerk: Thanks for bring me that, I'm sorry I don't have your missing document. Here, the invoice's approved now. Thanks againg for your help.",
    objects: [
      {
        img: "images/objects/approval.jpg",
        x: 23, y: 53.5,
        next: "ar"
      }
    ]
  },

  ar: {
    title: "Accounts Receivable",
    image: "images/ar.jpg",
    hint: "AR Clerk: Here, I found this envelop on the floor. It's not related to accounts receivable, I hope it's the missing document you've been looking for...",
    objects: [
      {
        img: "images/objects/envelop.jpg",
        x: 39.5, y: 94.5,
        next: "gl"
      }
    ]
  },

  gl: {
    title: "General Ledger",
    image: "images/gl.jpg",
    hint: "GL Controller: See that big pile? It's the journal entries to be posted. There are some mixed documents over there. Maybe your missing document is in between them.",
    objects: [
      {
        img: "images/objects/journal.jpg",
        x: 9.3, y: 47.1,
        next: "manager"
      }
    ]
  },

  manager: {
    title: "Finance Manager",
    image: "images/manager.jpg",
    hint: "Finance Manager: See this is the scam I told you about. You'd do a big favour if you could deal with this and find the missing document that the mysterious visitor brought.",
    objects: [
      {
        img: "images/objects/request.jpg",
        x: 42.5, y: 67.,
        next: "sales"
      }
    ]
  },

  sales: {
    title: "Sales Office",
    image: "images/sales.jpg",
    hint: "Salesperson: Your missing document may be there together with those questionable documents. Do me a favour and take them with you. It's already too busy here.",
    objects: [
      {
        img: "images/objects/so.jpg",
        x: 60, y: 66,
        next: "purchasing"
      }
    ]
  },

  purchasing: {
    title: "Purchasing",
    image: "images/purchasing.jpg",
    hint: "Purchasing Assistant: See those dark folders, you can get them, and with any luck you'll find your missing document. Please take it all with you, dispose of them, file them, i dont care, just help me to get rid of it.",
    objects: [
      {
        img: "images/objects/po.jpg",
        x: 34.59, y: 63,
        next: "vat"
      }
    ]
  },

  vat: {
    title: "VAT / Tax",
    image: "images/vat.jpg",
    hint: "Taxman: See those binders behind me? They've been moved by an unknown person since everybody here says they didn't move my binders. I'm sure I didn't leave them like that.",
    objects: [
      {
        img: "images/objects/binder.jpg",
        x: 71.5, y: 23,
        next: "ceo"
      }
    ]
  },

  ceo: {
    title: "CEO Office",
    image: "images/ceo.jpg",
    hint: "CEO: Hi, I haven't see you lately, how're you doing? Are you here for the agenda? Did you find it? Oh, I see you're looking for a missing document yourself. I'm afraid it's not here, but I have these papers for you.",
    objects: [
      {
        img: "images/objects/papers.jpg",
        x: 59.5, y: 61.8,
        next: "production"
      }
    ]
  },

  production: {
    title: "Production Floor",
    image: "images/production.jpg",
    hint: "Here, this is the document I was talking about, I don't understand a single thing, it this even English? Just numbers, numbers and numbers. I got a headache just looking at it, I don't know how you people in Accounting do it.",
    objects: [
      {
        img: "images/objects/workorder.jpg",
        x: 83.5, y: 37,
        next: "maintenance"
      }
    ]
  },

  maintenance: {
    title: "Maintenance",
    image: "images/maintenance.jpg",
    hint: "Wow, finally, after all day running after this document, you're able to get it. I'm so sorry for the inconvenient, I didn't mean to make your day miserable. Thank God everything is going back to normal now...",
    objects: [
      {
        img: "images/objects/breakdown.jpg",
        x: 41.5, y: 67.5,
        next: "desk"
      }
    ]
  },
    
    desk: {
    title: "Back to my desk",
    image: "images/desk.jpg",
    hint: "It's late, I wasted all day running after this document but at least now I can run the financial statement.",
    objects: [    
      {
        img: "images/objects/financialstatement.jpg",
        x: 26.9, y: 50.25,
        next: null
      },
    ]
  }
};
