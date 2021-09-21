const rewire = require("rewire")
const index = rewire("./index")
const get = index.__get__("get")
const startGame = index.__get__("startGame")
const formSubmit = index.__get__("formSubmit")
const loadForm = index.__get__("loadForm")
// @ponicode
describe("get", () => {
    test("0", () => {
        let callFunction = () => {
            get("label_1")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            get("label_2")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            get("ISO 9001")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            get("ISO 22000")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            get("AOP")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            get(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("startGame", () => {
    test("0", () => {
        let callFunction = () => {
            startGame()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("formSubmit", () => {
    test("0", () => {
        let callFunction = () => {
            formSubmit({ 0: { display: true }, style: { display: true } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            formSubmit({ 0: { display: true }, style: { display: false } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            formSubmit({ 0: { display: false }, style: { display: true } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            formSubmit({ 0: { display: false }, style: { display: false } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            formSubmit(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("loadForm", () => {
    test("0", () => {
        let callFunction = () => {
            loadForm()
        }
    
        expect(callFunction).not.toThrow()
    })
})
