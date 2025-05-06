export const serverRoute = (address) => 
  fetch(
    `https://loft-taxi.glitch.me/route?address1=${address.address1}&address2=${address.address2}`,
    {}
  ).then((res) => res.json());

