function addTokens(input, tokens) {

    if (typeof (input) !== "string") {

        throw ("Invalid input");
    }
    else {

        if (input.length < 6) {
            throw ("Input should have at least 6 characters");

        }
        else {

            if (tokens != undefined) {
                for (let i = 0; i < tokens.length; i++) {

                    if (typeof (tokens[i].tokenName) !== "string") {
                        throw ("Invalid array format")
                    }
                    else {

                        if (!input.includes("..."))
                            return input;
                        else {
                            input = input.replace("...", "${" + tokens[i].tokenName + "}");
                            return input;
                        }
                    }
                }
            }

        }
    }


}

const app = {
    addTokens: addTokens
}

module.exports = app;