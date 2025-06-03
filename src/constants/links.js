// Central place to manage all external links
export const LINKS = {
  // WhatsApp Community Link - Update this with your actual group invite
  WHATSAPP_COMMUNITY: "https://chat.whatsapp.com/GXFlF6FWqwv4sMscVLs5ZN",

  // Social Media Links
  INSTAGRAM: "https://instagram.com/hikeands33k",

  // Contact Information
  EMAIL: "hello@hikeands33k.com",

  // External hiking resources
  ORDNANCE_SURVEY: "https://www.ordnancesurvey.co.uk/osmaps/",
  WEATHER: "https://www.bbc.co.uk/weather",
};

// Helper function to open WhatsApp community
export const openWhatsAppCommunity = () => {
  window.open(LINKS.WHATSAPP_COMMUNITY, "_blank");
};

export default LINKS;
