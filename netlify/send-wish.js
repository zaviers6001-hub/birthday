exports.handler = async function (event) {

    /*
     * Only allow POST requests.
     */

    if (event.httpMethod !== "POST") {

        return {
            statusCode: 405,

            headers: {
                "Content-Type":
                    "application/json"
            },

            body: JSON.stringify({
                error: "Method not allowed."
            })
        };

    }


    try {

        const data =
            JSON.parse(
                event.body || "{}"
            );


        const wish =
            String(
                data.wish || ""
            ).trim();


        const name =
            String(
                data.name || "Unknown"
            ).trim();


        const page =
            String(
                data.page || ""
            ).trim();


        const submittedAt =
            String(
                data.submittedAt || ""
            ).trim();


        /*
         * Basic validation.
         */

        if (!wish) {

            return {
                statusCode: 400,

                headers: {
                    "Content-Type":
                        "application/json"
                },

                body: JSON.stringify({
                    error:
                        "Wish cannot be empty."
                })
            };

        }


        if (wish.length > 500) {

            return {
                statusCode: 400,

                headers: {
                    "Content-Type":
                        "application/json"
                },

                body: JSON.stringify({
                    error:
                        "Wish is too long."
                })
            };

        }


        /*
         * Your Discord webhook should be stored
         * as a Netlify environment variable.
         */

        const webhookURL =
            process.env.DISCORD_WEBHOOK_URL;


        if (!webhookURL) {

            console.error(
                "DISCORD_WEBHOOK_URL is missing."
            );

            return {
                statusCode: 500,

                headers: {
                    "Content-Type":
                        "application/json"
                },

                body: JSON.stringify({
                    error:
                        "Discord webhook is not configured."
                })
            };

        }


        /*
         * Discord message.
         */

        const discordMessage = {

            username:
                "Birthday Website 🌻",

            embeds: [

                {

                    title:
                        "🌻 A New Birthday Wish",

                    description:
                        wish,

                    color:
                        0xD9A928,

                    fields: [

                        {
                            name:
                                "Birthday Person",

                            value:
                                name ||
                                "Unknown",

                            inline: true
                        },

                        {
                            name:
                                "Submitted",

                            value:
                                submittedAt ||
                                "Unknown",

                            inline: true
                        }

                    ],

                    footer: {

                        text:
                            "Birthday Storybook"

                    }

                }

            ]

        };


        /*
         * Send to Discord.
         */

        const discordResponse =
            await fetch(
                webhookURL,
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body:
                        JSON.stringify(
                            discordMessage
                        )
                }
            );


        if (!discordResponse.ok) {

            const discordText =
                await discordResponse.text();

            console.error(
                "Discord error:",
                discordText
            );

            return {
                statusCode: 502,

                headers: {
                    "Content-Type":
                        "application/json"
                },

                body: JSON.stringify({
                    error:
                        "Discord rejected the message."
                })
            };

        }


        /*
         * Success.
         */

        return {

            statusCode: 200,

            headers: {
                "Content-Type":
                    "application/json"
            },

            body: JSON.stringify({

                success: true

            })

        };


    } catch (error) {

        console.error(
            "Function error:",
            error
        );


        return {

            statusCode: 500,

            headers: {
                "Content-Type":
                    "application/json"
            },

            body: JSON.stringify({

                error:
                    "Unable to send the wish."

            })

        };

    }

};
