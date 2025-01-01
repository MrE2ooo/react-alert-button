// Functin Based Components

// PascalCasting
function Message(){
    // JSX: JavaScript XML
    const Name = "Elias";
    if (Name){
        return <h1>Hello {Name}</h1>;
    }else{
        return <h1>Hello World</h1>
    }

}

export default Message;