const church = {
  name: "RCCG Open Heaven Model Parish",
  shortName: "Open Heaven",
  city: "Asaba",
  address: "13 Joe Dansaba Street, Beside Stadium, Off MFM Road, Asaba",

  mapLink:
  "https://www.google.com/maps/search/?api=1&query=13+Joe+Dansaba+Street,+Beside+Stadium,+Off+MFM+Road,+Asaba",
  
  navLinks: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Visit", href: "#visit" },
  ],

  hero: {
    badge: "WELCOME TO RCCG",
    title: "Open Heaven Model Parish",
    subtitle:
      "A place where lives are transformed through God's Word, heartfelt worship, and a loving community.",
    primaryButton: "Plan Your Visit",
    secondaryButton: "Watch Sermons",
  },

  about: {
    title: "A Church Where Everyone Belongs",
    description:
      "RCCG Open Heaven Model Parish is a family of believers committed to raising disciples through sound biblical teaching, passionate worship, fervent prayer, and genuine love. Whether you are new to the faith or looking for a church home, you are welcome here.",
    highlights: [
      "Bible-Centered Teaching",
      "Spirit-Filled Worship",
      "Prayer & Fellowship",
      "Family-Friendly Environment",
    ],
  },

  services: [
    {
      name: "Sunday Worship Service",
      day: "Sunday",
      time: "8:00 AM",
    },
    {
      name: "Digging Deep",
      day: "Tuesday",
      time: "5:00 PM",
    },
    {
      name: "Faith Clinic",
      day: "Thursday",
      time: "5:00 PM",
    },
  ],
  visit: {
    title: "Plan Your Visit",
    description:
      "Whether you're joining us for the first time or returning, we'd love to welcome you. Come experience heartfelt worship, inspiring messages, and a loving church family.",
    address: "13 Joe Dansaba Street, Beside Stadium, Off MFM Road, Asaba",
    button: "Get Directions",
  },

  social: {
    facebook: "https://web.facebook.com/rccgohpasaba/",
  },
};

export default church;
