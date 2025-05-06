
export const serverRegister = async ({email, password, name, surname}) => {
  const ops = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({email, password, name, surname}),
  };

  return await fetch(`https://loft-taxi.glitch.me/register`, ops)
    .then((response) => response.json())
    
};
