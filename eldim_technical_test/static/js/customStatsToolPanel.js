class CustomStatsToolPanel {
    eGui;
    init() {
        const { el } = redom;
        const saveChangesButton =
            el("button", {
                onclick: () => saveChanges(),
                style: {
                    textAlign: "center",
                    position: "absolute",
                    top: "25%",
                    left: "25%"

                }
            },
                'Save Changes'

            )
            ;
        this.eGui = saveChangesButton;
        this.eGui.style.textAlign = 'center';

    }

    getGui() {
        return this.eGui;
    }

}
