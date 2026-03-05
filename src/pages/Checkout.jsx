export default function Checkout() {

    const data = {
        name: "",
        email:"",
        contact:"",
        address:"",
        payment:"",
        
    }

    return(
        <form action="">

            <input type="text" name="name" placeholder="Enter your name" required/>

            <input type="email" name="email"/>

            <input type="number" name="contact" placeholder="Your contact" required/>

            <input type="text" name="address" placeholder="Provide address" required/>

            <select name="payment" required>
                <option value="select" selected>Select method</option>
                <option value="upi">UPI</option>
                <option value="debit-card">Debit card</option>
                <option value="credit-card">Credit card</option>
            </select>

        </form>
    )
};
