import TestButtonHolder from "../components/TestButtonHolder";

export default function TestPage() {
    const members = ['Kathy', 'Kelvin', 'Cody'];

    return (
        <div>
            Hello, welcome to test page
            <TestButtonHolder members={members} lmao='lmao'/>
        </div>
    );
}

