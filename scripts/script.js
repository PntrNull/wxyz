function Test() { /* Funky */
    fetch("./texts/Template.json")
        .then(Response => Response.json())
        .then(Data => {
            document.getElementById("text1").innerHTML =
                "Time:" + Data.Time
                + "<br />From:" + Data.From
                + "<br />Text:" + Data.Text;
        });
}