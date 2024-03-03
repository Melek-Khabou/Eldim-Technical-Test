class CustomStatsToolPanel {
    eGui;
    init() {
        const { el } = redom;
        const saveChangesButton =
            el("div", {
                style: {
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center",
                    position: "absolute",
                    top: "25%",
                    left: "25%"


                }
            }, el("button", {
                onclick: () => saveChanges(),
                style: {
                    margin: "10px"

                }

            },
                'Save Changes'), el("button", {
                    onclick: () =>
                        refreshChanges()

                    ,
                    style: {
                        margin: "10px"

                    }

                },
                    'Refresh'));

        this.eGui = saveChangesButton;
        this.eGui.style.textAlign = 'center';

    }

    getGui() {
        return this.eGui;
    }

}
