const data = [
    {
        name: "Baked Salmon",
        ingredients: [
            {name: "Salmon", amount: 1, measurement: "1 lb"},
            {name: "Pine Nuts", amount: 1, measurement: "cup"},
            {name: "Butter Lettuce", amount:2, measurement: "cups"},
            {name: "Yellow Squash", amount: 1, measurement: "med"},
            {name: "Olive Oil", amount: 0.5, measurement: "cup"},
            {name: "Garlic", amount: 3, measurement: "cloves"}
        ],
        steps: [
            "Preheat the oven to 350 degrees.",
            "Spread the olive oil around a glass baking dish.",
            "Place the salmon in the dish.",
            "Add the garlic and bake for 15 minutes.",
            "Add the yellow squash and pine nuts and put back in the oven for 30 mins.",
            "Serve on a bed of butter lettuce."
        ],
    },

    {
        name: "Fish Tacos",
        ingredients: [
            {name: "Whitefish", amount: 1, measurement: "1 lb"},
            {name: "Cheese", amount: 1, measurement: "cup"},
            {name: "Iceberg Lettuce", amount: 2, measurement: "cups"},
            {name: "Tomatoes", amount: 2, measurement: "large"},
            {name: "Tortillas", amount: 3, measurement: "med"},
        ],
        steps: [
            "Cook the fish on the grill until hot.",
            "Place the fish on the 3 tortillas.",
            "Top them with lettuce, tomatoes, and cheese."
        ],
    },
];

const Ingredients = ({data = []}) => (
    <ul className="ingredients">
        {data.map((ingredients, i) => (
            <li key={i}>{ingredients.name}</li>
        ))}
    </ul>
);

const Instructions = ({data = []}) => (
    <section className="instructions">
        <h3>Cooking Instructions</h3>
        {data.map((step, i) => (
            <p key={i}>{step}</p>
        ))}
    </section>
);

const Recipe = ({name, ingredients, steps}) => (
    <section id={name.toLowerCase().replace(/ /g, "-")}>
    
        <h2>{name}</h2>
        <Ingredients data={ingredients} />
        <Instructions data={steps} />
    </section>
);

const Menu = ({title, recipes}) => (
    <article>
        <header>
            <h1>{title}</h1>
        </header>

            <div className="recipes">
            {
                recipes.map((recipe,i) => (
                <Recipe key={i} {...recipe} />
                ))}
            </div>
    </article>
);


ReactDOM.render(
    <Menu recipes={data} title="Delicious Recipes" />,
    document.getElementById("root")
)