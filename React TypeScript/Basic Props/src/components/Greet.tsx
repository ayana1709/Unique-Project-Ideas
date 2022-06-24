type GreatPerson = {
    name: string;
    messageCount: number;
    isLoogin: boolean;
}

export const Greet = (person: GreatPerson) => {
    return (
        <div>
            <h2>
                {person.isLoogin 
                ? "Welcome ${person.name}! You have {person.messageCount} unread message"
                : "Welcome Guest"}      
            </h2>
        </div>
    )
}
