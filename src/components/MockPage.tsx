export default function MockPage({ title }: { title: string }) {
    return (
        <div className="p-10">
            <h1 className="text-3xl font-bold mb-4">{title}</h1>
            <p>Component under construction.</p>
        </div>
    );
}
