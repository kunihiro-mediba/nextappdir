export default async function Page() {
    const now = await getData();

    return (
        <>
            <div>Sub page</div>
            <div>{now}</div>
        </>
    );
}

async function getData() {
    // sleep 3sec
    await new Promise((resolve) => setTimeout(resolve, 3000));

    return new Date().toISOString();
}
