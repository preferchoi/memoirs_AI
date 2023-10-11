export const CallGPT = async () => {
    // await console.log('call');

    const res = await fetch("https://api.openai.com/v1/chat/completions",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_GPT_API_KEY}`
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{role: "user", content: "Say this isa test!"}],
            temperature: 0.7,
            max_tokens: 1_000,
        })
    })

    const resData = await res.json();

    const message = resData.choices[0].message.content;
    console.log(message);

    return message;
};

