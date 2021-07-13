'use strict';

const date = [
    {
        name: "Kuba",
        age: 27,
        group: "Sem I / Group B"
    },
    {
        name: "Roman",
        age: 30,
        group: "Sem III / Group C"
    },
    {
        name: "Andrzej",
        age: 21,
        group: "Sem I / Group B"
    },
]

const Users = () => {
    return(
        <div>
            <h1>Users</h1>
            {date.map(({name, age, group}) => (
                <div key={name}>
                    <p>{name}</p>
                    <p>{age}</p>
                    <p>{group}</p>
                </div>
            ))}
        </div>
    );
};

const appContainer = document.querySelector('#app');

ReactDOM.render(<Users />, appContainer);