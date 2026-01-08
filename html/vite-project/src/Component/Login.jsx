function Login(props) {
    let name = "sanjai";
    console.log(props.m);
    console.log(props.array);
    console.log(props.boolean);
    console.log(props.object);
    return(
        <div className="login">
            <h1>HELLO</h1>
            <div style={{ color: "yellowgreen"}}>
                <p>Name:{name}</p>
                <p>{props.m}</p>
                <p>{props.array}</p>
                <p>{props.object.name}</p>
                <p>{props.boolean}</p>
            </div>
        </div>
    )
}

export default Login;