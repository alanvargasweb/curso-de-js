const external = () => {

    let firstNumber = 10;

    const internal = () => {

        let firstNumber = 22;

        const extraInternal = () => {
            let firstNumber = 44;
            console.log(firstNumber)
        }

        extraInternal()
    }

    internal()
}

