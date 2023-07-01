const navbarItems = {
  heb: [
    {
      id: 1,
      name: "דף הבית",
      route: "/",
    },
    {
      id: 2,
      name: "המלון",
      route: "/location",
    },
    {
      id: 3,
      name: "לוח זמנים",
      route: "/schedule",
    },
    {
      id: 4,
      name: "מידע שימושי",
      route: "/info",
    },
    {
      id: 5,
      name: "הסעות",
      route: "/shuttles",
    },
  ],
  en: [
    {
      id: 1,
      name: "HOME",
      route: "/",
    },
    {
      id: 2,
      name: "LOCATION",
      route: "/location",
    },
    {
      id: 3,
      name: "SCHEDULE",
      route: "/schedule",
    },
    {
      id: 4,
      name: "INFORMATION",
      route: "/info",
    },
    {
      id: 5,
      name: "SHUTTLE LIST",
      route: "/shuttles",
    },
  ],
};

const selinaImages = [
  {
    id: 1,
    src: "https://kaminos-resort-limni.booked.net/data/Photos/OriginalPhoto/7112/711265/711265222/Kaminos-Resort-Limni-Evia-Exterior.JPEG",
    alt: "photo-1",
  },
  {
    id: 2,
    src: "https://selina-res.cloudinary.com/image/upload/if_iw_gt_1440,c_scale,w_1440/e_sharpen:80,q_auto:good/f_auto/v1/s-cf-1/xdw7oj4u3s4v/2NJCyjpH4wL8BScd786y1b/172bc1fb12a0be0eb9a5984c1758ea41/_DSF7281.jpg",
    alt: "photo-10",
  },
  {
    id: 3,
    src: "https://selina-res.cloudinary.com/image/upload/if_iw_gt_1440,c_scale,w_1440/e_sharpen:80,q_auto:good/f_auto/v1/s-cf-1/xdw7oj4u3s4v/4j6gs3Ht60foyDNxYMuAZY/e8e033c42051c3df1feb395faa02a4e4/_DSF7288.jpg",
    alt: "photo-2",
  },
  {
    id: 4,
    src: "https://selina-res.cloudinary.com/image/upload/if_iw_gt_1440,c_scale,w_1440/e_sharpen:80,q_auto:good/f_auto/v1/s-cf-1/xdw7oj4u3s4v/5R92EMjcwhQahtPgGW2Iji/5f9f8ad9910efda3427b34e1e6e3fdff/Web_and_App-Selina_kaminos_Evia_15-09-22_Hybrid_TBA.jpeg",
    alt: "photo-3",
  },
  {
    id: 5,
    src: "https://selina-res.cloudinary.com/image/upload/if_iw_gt_1440,c_scale,w_1440/e_sharpen:80,q_auto:good/f_auto/v1/s-cf-1/xdw7oj4u3s4v/5HqNU9iV2KzjEVHlWrnjvK/c51a35fdff6ad666a80c129c7c233322/Web_and_App-Selina_kaminos_Evia_15-09-22_TBA.jpeg",
    alt: "photo-4",
  },
  {
    id: 6,
    src: "https://www.ekdromi.gr/cdn-cgi/image/w=770,h=440,fit=cover,f=webp/public/images/upload/kaminos_resort_by_nin_bau_1658239646_AIH.jpg",
    alt: "photo-5",
  },
  {
    id: 7,
    src: "https://cdn.webhotelier.net/photos/w=1920/kaminoshtl/L406471.jpg",
    alt: "photo-6",
  },
  {
    id: 8,
    src: "https://s.gotrip.lv/thumbs/202008/094/396/dea73217bebc332cf9a3ea0f08c58916/94396.jpg",
    alt: "photo-7",
  },
  {
    id: 9,
    src: "https://www.evia-booking.com/components/com_reservations/gallery/hotels/large/kaminos_resort_16.jpg",
    alt: "photo-8",
  },
  {
    id: 10,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRetfEqGeiwZ0Xl9uCzTU7g7Pn1xefYG6bRXMBXjDiekMknvmhm1XPh6Mupvod-3pqRF6g&usqp=CAU",
    alt: "photo-10",
  },
  {
    id: 11,
    src: "https://media-cdn.tripadvisor.com/media/photo-m/1280/26/af/61/55/kaminos-resort.jpg",
    alt: "photo-11",
  },
  {
    id: 12,
    src: "https://kaminos-resort-limni.booked.net/data/Photos/OriginalPhoto/7112/711265/711265492/Kaminos-Resort-Limni-Evia-Exterior.JPEG",
    alt: "photo-12",
  },
  {
    id: 13,
    src: "https://cdn.webhotelier.net/photos/w=1920/kaminoshtl/L406478.jpg",
    alt: "photo-13",
  },
  {
    id: 14,
    src: "https://selina-res.cloudinary.com/image/upload/if_iw_gt_1440,c_scale,w_1440/e_sharpen:80,q_auto:good/f_auto/v1/s-cf-1/xdw7oj4u3s4v/5NVA9Hn9OYT6xl80JM2ufX/e9868cdcd608cde41bec64d5f1808427/Web_and_App-Selina_kaminos_Evia_15-09-22_TBA2.jpeg",
    alt: "photo-14",
  },
  {
    id: 15,
    src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/365032261.jpg?k=c788b6a49afe2a7e905dbe03ce27f463d76e294af4651dfadffbe7a2836921c7&o=&hp=1",
    alt: "photo-14",
  },
];

const faq = {
  en: [
    {
      id: 1,
      question: "Extending your stay at Selina Kaminos Evia",
      answer:
        "The hotel is booked for the wedding from July 13th until the 15th. Guests of the wedding can book extra nights at the resort for the days before and after the wedding. Selina offers 20% discount on their 'flex-rate' for the wedding guests. To make your reservations for the extra nights, check your room number with one of us (Shira/Nadav) and send an email to reservations.greece@selina.com. Mention in the email that you are guests of our wedding and the booking id: 5365092.",
      redirect: "",
      extraText: "",
    },
    {
      id: 2,
      question: "Arriving at and departing from Selina Kaminos Evia",
      answer:
        "Since the wedding resort is rather distant and not easily accesible, we organised shuttles from Atheness airport to the resort and back. There are two shuttles to the resort on July 13th: at 09:30 and 12:30. On July 15th, the check-out is at 11:00, and the shuttle back to the airport will leave at 11:30.",
      redirect: "/shuttles",
      redirectText: "Click here to check to which shuttle you are assigned!",
      redirect2: "https://wa.me/32456307185",
      redirectText2: "text Nadav ASAP.",
      extraText:
        "If your name is not on the list and you want to use the shuttle service, please",
    },
    {
      id: 3,
      question: "Renting a car after the wedding",
      answer:
        "If you plan on renting a car after the wedding, you have two options: either taking the shuttle back to Atheness airport and renting at one of the agencies there, or renting from one of the car rental agencies at Chalcis. The shuttle back to Athenes airport will drop you off in Chalcis. The following car agency offers the possibility to rent a car in Chalcis and return it in Atheness:",
      redirect:
        "https://www.autounion.gr/?gclid=CjwKCAjwhJukBhBPEiwAniIcNaAQ4kONRyZdBd0EK4VywuRfetCWB4CJ23gK65a0MSZuybWDM_5f5hoCnCYQAvD_BwE",
      redirectText:
        "https://www.autounion.gr/?gclid=CjwKCAjwhJukBhBPEiwAniIcNaAQ4kONRyZdBd0EK4VywuRfetCWB4CJ23gK65a0MSZuybWDM_5f5hoCnCYQAvD_BwE",
      extraText: "",
    },
    {
      id: 4,
      question: "Dress code",
      answer: "Wear whatever you want as long it's not a wedding dress.",
      redirect: "",
      extraText: "",
    },
    {
      id: 5,
      question: "Let us know if you have any question, concern, or request!",
      answer: "Shira: +32-456253683, Nadav: +32-456307185",
      redirect: "",
      extraText: "",
    },
  ],
  heb: [
    {
      id: 1,
      question: "הארכת השהייה במלון",
      answer:
        "המלון כולו סגור לחתונה מה 13 עד 15 ביולי. אורחי החתונה יכולים להזמין לילות נוספים במלון לפני ואחרי החתונה. בית המלון מציע לאורחי החתונה 20 אחוז הנחה על ה׳תעריף הגמיש׳ ללילות אלו. להזמנת חדרים, בדקו איתנו את מספר בחדר שלכם ושלחו אימייל ל reservations.greece@selina.com. ציינו באימייל שאתם אורחים של החתונה של שירה ונדב, ואת מספר ההזמנה 5365092.",
      redirect: "",
      extraText: "",
    },
    {
      id: 2,
      question: "הגעה וחזרה למלון",
      answer:
        "ב13.7, יש שתי הסעות משדה התעופה באתונה למלון באי אביה. ההסעה הראשונה יוצאת בשעה 09:30, והשנייה בשעה 12:30. ב15.7, הצ׳ק אאוט מהמלון בשעה 11:00, וההסעה חזרה לשדה התעופה תצא בשעה 11:30.",
      redirect: "/shuttles",
      redirectText: "לחצו כאן על מנת לראות על איזה הסעה את רשומים.",
      redirect2: "https://wa.me/32456307185",
      redirectText2: "שלחו הודעה לנדב בהקדם האפשרי.",
      extraText: "אם אתם לא מופיעים ברשימה ומעוניינים להצטרף להסעה,",
    },
    {
      id: 3,
      question: "השכרת רכב אחרי החתונה",
      answer:
        "לאורחים המעוניינים להשכיר רכב אחרי החתונה יש שתי אפשרויות: לנסוע עם ההסעה ב15.7 חזרה לשדה התעופה באתונה ולהשכיר מאחת הסוכנויות שם, או להשכיר מאחת הסוכנויות בעיר Chalcis. תוכלו להגיע לChalcis  עם ההסעה חזרה לאתונה. סוכנות רכב בקאלקיס ממנה ניתן לשכור רכב והחזיר בשדה התעופה באתונה:",
      redirect:
        "https://www.autounion.gr/?gclid=CjwKCAjwhJukBhBPEiwAniIcNaAQ4kONRyZdBd0EK4VywuRfetCWB4CJ23gK65a0MSZuybWDM_5f5hoCnCYQAvD_BwE",
      redirectText:
        "https://www.autounion.gr/?gclid=CjwKCAjwhJukBhBPEiwAniIcNaAQ4kONRyZdBd0EK4VywuRfetCWB4CJ23gK65a0MSZuybWDM_5f5hoCnCYQAvD_BwE",
      extraText: "",
    },
    {
      id: 4,
      question: "קוד לבוש",
      answer: "תרגישו חופשי ללבוש מה שבא לכם.",
      redirect: "",
      extraText: "",
    },
    {
      id: 5,
      question:
        "אנחנו כל כך שמחים שתבואו לחגוג איתנו! אנחנו זמינים לכל שאלה או בקשה:",
      answer: "שירה: 0032456307185, נדב: 0032456307185.",
      redirect: "",
      extraText: "",
    },
  ],
};

const shuttlesList = [
  {
    id: 1,
    direction: "Atheness airport to Selina Kaminos Evia",
    departureTime: "July 13th, 09:30",
    guests: [
      "Alexander Paz Goldman",
      "Ruth Kamar",
      "Omri Paz Akri",
      "Gali Katsir",
      "Shira Cohen",
      "Maya Tal",
      "Itai Agmon",
      "Yael Ben-or",
      "Matan Adani",
      "Ofir Peer",
      "Avi Arusi",
      "Emily Arusi",
      "Omer Arusi",
      "Yarden Arusi",
      "Ouri Katan",
      "Batya Katan",
      "Sara Katan",
      "Dudu Kattan",
      "Shefi Kattan",
    ],
  },
  {
    id: 2,
    direction: "Atheness airport to Selina Kaminos Evia",
    departureTime: "July 13th, 12:30",
    guests: [
      "Naama Vaaknin",
      "Daniel Wieder",
      "Diana Bucur",
      "Shani Poms",
      "Betsi Amit",
      "Hilel Amit",
      "Shuki Michaeli",
      "Michal Michaeli",
      "Adi Michaeli",
      "Roei Michaeli",
      "Inbal Michaeli",
      "Osnat Uni",
      "Sara Uni",
      "Shira Schwartz",
      "Alma Schwartz",
      "Bibi Shirazi",
      "Dafne Paris",
      "Lisa De Bruycker",
      "Josefien De Waele",
      "Ido Zilberman",
      "Matan Alhadeff",
      "Shahar Vin",
      "Niv Katan",
      "Liron Lindeman",
    ],
  },
  {
    id: 3,
    direction: "Selina Kaminos Evia to Atheness airport",
    departureTime: "July 15th, 11:30",
    guests: [
      "Diana Bucur",
      "Shani Poms",
      "Alexander Paz Goldman",
      "Ruth Kamar",
      "Omri Paz Akri",
      "Gali Katsir",
      "Shira Cohen",
      "Maya Tal",
      "Ouri Katan",
      "Batya Katan",
      "Dudu Kattan",
      "Shefi Kattan",
      "Itamar Katan",
      "Omer Arusi",
      "Yarden Arusi",
      "Maayan Ben David",
      "Roy Ben David",
      "Alona Ben David",
      "Nuri Ben David",
      "Avi Arusi",
      "Emily Arusi",
      "Sara Katan",
      "Bibi Shirazi",
      "Dafne Paris",
      "Lisa De Bruycker",
      "Josefien De Waele",
      "Eylam Keshet",
      "Marusha",
      "Osnat Uni",
      "Sara Uni",
      "Shira Schwartz",
      "Alma Schwartz",
      "Ido Zilberman",
      "Matan Alhadeff",
      "Naama Vaaknin",
      "Daniel Wieder",
      "Betsi Amit (to Chalkida)",
      "Hilel Amit (to Chalkida)",
      "Itai Agmon (to Chalkida)",
      "Yael Ben-or (to Chalkida)",
      "Matan Adani (to Chalkida)",
      "Ofir Peer (to Chalkida)",
    ],
  },
];

export { navbarItems, selinaImages, faq, shuttlesList };
