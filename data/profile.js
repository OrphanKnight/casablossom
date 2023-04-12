export const sidebarData = [
  {
    heading: "My Account",
    links: [
      // {
      //   name: "My Profile",
      //   link: "/profile",
      // },
      {
        name: "Addresses",
        link: "/profile/UserProfileAddresses",
      },
      {
        name: "My Payment Options",
        link: "/profile/payment",
      },
      {
        name: "Reset Password",
        link: "/profile/security",
      },
    ],
  },
  {
    heading: "My Orders",
    links: [
      {
        name: "All Orders",
        link: "/profile/UserProfileOrders",
        filter: "",
      },
      {
        name: "Paid Orders",
        link: "/profile/UserProfileOrders",
        filter: "paid",
      },
      {
        name: "Unpaid Orders",
        link: "/profile/UserProfileOrders",
        filter: "unpaid",
      },

      {
        name: "Processing Orders",
        link: "/profile/UserProfileOrders",
        filter: "Processing",
      },
      {
        name: "Unprocessed Orders",
        link: "/profile/UserProfileOrders",
        filter: "",
      },
      {
        name: "Dispatched Orders",
        link: "/profile/UserProfileOrders",
        filter: "Dispatched",
      },
      {
        name: "Delievered Orders",
        link: "/profile/UserProfileOrders",
        filter: "Completed",
      },
      {
        name: "Cancelled Orders",
        link: "/profile/UserProfileOrders",
        filter: "Cancelled",
      },
    ],
  },
  // {
  //   heading: "My Lists",
  //   links: [
  //     {
  //       name: "Whishlist",
  //       link: "/profile/wishlist",
  //     },
  //     {
  //       name: "Recently Viewed",
  //       link: "/profile/recent",
  //     },
  //   ],
  // },
  // {
  //   heading: "Customer Service",
  //   links: [
  //     {
  //       name: "My Message",
  //       link: "/profile/messages",
  //     },
  //     {
  //       name: "Service Records",
  //       link: "/profile/services",
  //     },
  //   ],
  // },
  {
    heading: "Other Services",
    links: [
      {
        name: "Survey Center",
        link: "",
      },
      {
        name: "Contact Preferences",
        link: "",
      },
    ],
  },
  {
    heading: "Policy",
    links: [
      {
        name: "Shipping Info",
        link: "",
      },
      {
        name: "Return Policy",
        link: "",
      },
      {
        name: "Privacy & Cookie Policy",
        link: "",
      },
    ],
  },
  {
    heading: "Sign out",
    link: [],
  },
];

export const ordersLinks = [
  {
    name: "All Orders",
    filter: "",
  },
  {
    name: "Paid Orders",
    filter: "paid",
  },
  {
    name: "Unpaid Orders",
    filter: "unpaid",
  },
  {
    name: "Processing Orders",
    filter: "Processing",
  },
  {
    name: "Unprocessed Orders",
    filter: "Not Processed",
  },
  {
    name: "Dispatched Orders",
    filter: "Dispatched",
  },
  {
    name: "Delievered Orders",
    filter: "Delievered",
  },
  {
    name: "Cancelled Orders",
    filter: "Cancelled",
  },
];
