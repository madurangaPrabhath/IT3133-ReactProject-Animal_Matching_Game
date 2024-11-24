import { animals } from '../assets/data/AnimalsDb';
import { useState } from 'react';

export default function AnimalTable(props) {
    const [randomAnimal, setRandomAnimal] = useState('');
    const [selectedAnimal, setSelectedAnimal] = useState('');
    const [result, setResult] = useState('');

    const handleAnimalClick = (selectedAnimal) => {
        if (selectedAnimal === randomAnimal) {
            setResult('WIN');
        } else {
            setResult('LOSE');
        }
    };

    return (
        <div className='gameContainer'>
            <table className='game-table'>
                <thead>
                    <tr >
                        <th colspan="3">Animal Matching Game</th>
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
                            <h2>Result</h2></td>

                        <td className='animalname-col'>
                            <h2>{randomAnimal.toUpperCase()}</h2></td>
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