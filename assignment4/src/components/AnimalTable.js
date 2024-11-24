import { animals } from '../assets/data/AnimalsDb';
import { useEffect, useState } from 'react';
import '../assets/css/compo.css';

export default function AnimalTable(props) {
    const [randomAnimal, setRandomAnimal] = useState(null);
    const [result, setResult] = useState('');

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * animals.length);
        setRandomAnimal(animals[randomIndex]);
    }, []);


    const handleAnimalClick = (selectedAnimal) => {
        if (selectedAnimal === randomAnimal.name) {
            setResult('WIN');
        } else {
            setResult('LOSE');
        }
    };

    if (!randomAnimal) {
        return <div className="loading">Loading...</div>;
    }
    return (
        <div className='gameContainer'>
            <table className='game-table'>
                <thead>
                    <tr >
                        <th colSpan="3">Animal Matching Game</th>
                    </tr>
                    <tr>
                        <th>Result</th>
                        <th>Animal Name</th>
                        <th>Select the Animal</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='result-col'>
                            <h2>{result}</h2></td>

                        <td className='animalname-col'>
                            <h2>{randomAnimal.name.toUpperCase()}</h2></td>
                        <td className='animalgrid-col'>
                            <div>
                                <div className='animalgrid'>
                                    {animals.map((animal) => (
                                        <div key={animal.name} className='animalgrid-item' onClick={() => handleAnimalClick(animal.name)}>
                                            <img src={require(`../assets/img/${animal.img}`)} alt={animal.name} className='animal-image' />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}