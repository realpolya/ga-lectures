import ItemCard from '../ItemCard/ItemCard.jsx';
import './FounderList.css'

const FounderList = () => {

    class Bio {
        constructor(name, age, occupation) {
            this.name = name;
            this.age = age;
            this.occupation  = occupation;
        }
    }
    
    const Liza = new Bio('Liza', 29, 'Ballerina');
    const Dima = new Bio('Dima', 34, 'Trader');
    const Pippy = new Bio('Pippy', 55, 'Barista');
    
    const bios = [Liza, Dima, Pippy];

    return (
        <>
            <div className="all-bios">
                {bios.map(bio => 
                    <ItemCard {...bio} />
                )}
            </div>
        </>
    )
}

export default FounderList;