import { animals } from '../assets/data/AnimalsDb';

export default function AnimalTable(props) {
    return (
        <div className='gameContainer'>
            <table className='game-table'>
                <thead>
                    <tr >
                        <th colspan="3">Animal Matching Game</th>
                    </tr>
                    <tr>
                        <td >Result</td>
                        <td>Animal Name</td>
                        <td>Select the Animal</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><h2>Result</h2></td>

                        <td><h2>Animal Name</h2></td>
                        <td>
                            <div>

                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}