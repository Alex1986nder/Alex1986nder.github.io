export const serverCard = async (
  cardName,
  cardNumber,
  expiryDate,
  cvc,
  token,
) => {
  const ops = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      cardName,
      cardNumber,
      expiryDate,
      cvc,
      token,
    }),
  };
  return await fetch(` https://loft-taxi.glitch.me/card`, ops)
    .then((response) => response.json())
    .then((data) => data.success);
};
