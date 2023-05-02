import { Counter } from "../components/counter";

export default async function Page(): Promise<JSX.Element> {
    return (
        <>
            <div>Hello,World!!</div>
            <Counter />
        </>
    );
}
