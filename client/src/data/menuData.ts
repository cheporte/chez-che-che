import FigAndGoatCheeseCrostini from '@assets/img/food/starters/fig-goat-cheese-crostini.jpg';
import BeetCarpaccio from '@assets/img/food/starters/carpaccio-de-betteraves-rouges.jpg';
import FrenchOnionSoup from '@assets/img/food/starters/french-onion-soup.jpg';

import CoqAuVin from '@assets/img/food/main-courses/coq-au-vin.jpeg';
import SearedDuckBreast from '@assets/img/food/main-courses/seared-duck-breast-with-blackberry-jus.jpeg';
import MushroomRisotto from '@assets/img/food/main-courses/mushroom-risotto-with-truffle-oil.jpg';

import LavenderCremeBrulee from '@assets/img/food/desserts/lavender-creme-brulee.jpeg';
import RaspberryMilleFeuille from '@assets/img/food/desserts/raspberry-mille-feuille.jpg';
import DarkChocolateTart from '@assets/img/food/desserts/dark-chocolate-tart-with-sea-salt.jpg';

import MidnightMocha from '@assets/img/food/drinks/midnight-mocha.jpg';
import RosePetalLatte from '@assets/img/food/drinks/rose-petal-latte.jpg';
import ClassicEspresso from '@assets/img/food/drinks/classic-espresso.jpg';
import ElderflowerFizz from '@assets/img/food/drinks/elderflower-fizz.jpg';
import BrewDeCheporte from '@assets/img/food/drinks/brew-de-cheporte.jpg';
import AmethystIcedTea from '@assets/img/food/drinks/amethyst-iced-tea.jpg';
import VanillaColdBrew from '@assets/img/food/drinks/vanilla-cold-brew.jpg';
import ForestBerrySparkle from '@assets/img/food/drinks/forest-berry-sparkle.jpg';

export const starters = [
    {
      imageUrl: FigAndGoatCheeseCrostini,
      name: 'Fig & Goat Cheese Tartine',
      price: '8',
      ingredients: [
        'Fresh figs',
        'Goat cheese',
        'Baguette slices',
        'Honey',
        'Thyme',
        'Crushed walnuts',
        'Olive oil',
      ],
    },
    {
        imageUrl: BeetCarpaccio,
        name: "Beet Carpaccio with Hazelnut Vinaigrette",
        price: "9",
        ingredients: [
        "Roasted red beets (thinly sliced)",
        "Arugula",
        "Crushed hazelnuts",
        "Hazelnut oil",
        "Sherry vinegar",
        "Dijon mustard",
        "Sea salt & black pepper"
        ]
    },
    {
        imageUrl: FrenchOnionSoup,
        name: "Classic French Onion Soup",
        price: "10",
        ingredients: [
        "Yellow onions (caramelized)",
        "Beef broth",
        "Butter",
        "Dry white wine",
        "Fresh thyme",
        "Bay leaf",
        "Gruyère cheese",
        "Baguette slices (toasted)"
        ]
    }
];

export const mains = [
    {
        imageUrl: CoqAuVin,
        name: "Coq au Vin – Red Wine Braised Chicken",
        price: "18",
        ingredients: [
        "Bone-in chicken pieces",
        "Red wine (Burgundy preferred)",
        "Bacon lardons",
        "Carrots",
        "Pearl onions",
        "Mushrooms",
        "Garlic",
        "Thyme, bay leaf",
        "Chicken broth",
        "Flour (for thickening)"
        ]
    },
    {
        imageUrl: SearedDuckBreast,
        name: "Seared Duck Breast with Blackberry Jus",
        price: "21",
        ingredients: [
        "Duck breasts",
        "Fresh blackberries",
        "Red wine",
        "Shallots",
        "Chicken stock",
        "Balsamic vinegar",
        "Butter",
        "Salt & black pepper"
        ]
    },
    {
        imageUrl: MushroomRisotto,
        name: "Wild Mushroom Risotto with Truffle Oil",
        price: "17",
        ingredients: [
        "Arborio rice",
        "Wild mushrooms (chanterelles, porcini, cremini)",
        "Shallots",
        "Garlic",
        "White wine",
        "Vegetable or chicken stock",
        "Parmesan cheese",
        "Butter",
        "Truffle oil",
        "Fresh parsley"
        ]
    }
];

export const desserts = [
    {
        imageUrl: LavenderCremeBrulee,
        name: "Lavender Crème Brûlée",
        price: "8",
        ingredients: [
        "Heavy cream",
        "Dried culinary lavender",
        "Egg yolks",
        "Sugar",
        "Vanilla extract",
        "Brown sugar (for topping)"
        ]
    },
    {
        imageUrl: RaspberryMilleFeuille,
        name: "Raspberry Mille-Feuille",
        price: "9",
        ingredients: [
        "Puff pastry",
        "Pastry cream (crème pâtissière)",
        "Fresh raspberries",
        "Powdered sugar",
        "Vanilla",
        "Whipped cream (optional)"
        ]
    },
    {
        imageUrl: DarkChocolateTart,
        name: "Dark Chocolate Tart with Sea Salt",
        price: "8",
        ingredients: [
        "Dark chocolate (70%+)",
        "Heavy cream",
        "Butter",
        "Eggs",
        "Sugar",
        "Tart crust (pâte sucrée or shortbread)",
        "Flaky sea salt"
        ]
    }
];

export const drinks = [
    {
      name: "Midnight Mocha",
      imageUrl: MidnightMocha,
      price: 6.5,
      ingredients: [
        "Espresso",
        "Dark chocolate",
        "Steamed milk",
        "Vanilla syrup",
        "Whipped cream"
        ]
    },
    {
      name: "Rose Petal Latte",
      imageUrl: RosePetalLatte,
      price: 7.0,
      ingredients: [
        "Espresso",
        "Steamed milk",
        "Rose syrup",
        "Edible rose petals"
        ]
    },
    {
      name: "Classic Espresso",
      imageUrl: ClassicEspresso,
      price: 4.0,
      ingredients: [
        "Double espresso shot"
        ]
    },
    {
      name: "Elderflower Fizz",
      imageUrl: ElderflowerFizz,
      price: 6.0,
      ingredients: [
        "Elderflower syrup",
        "Soda water",
        "Mint leaves",
        "Lemon slice"
        ]
    },
    {
      name: "Brew de Cheporté",
      imageUrl: BrewDeCheporte,
      price: 8.0,
      ingredients: [
        "French press blend",
        "Cardamom",
        "Orange zest",
        "Honey",
        "Cream"
        ]
    },
    {
      name: "Amethyst Iced Tea",
      imageUrl: AmethystIcedTea,
      price: 5.5,
      ingredients: [
        "Lavender tea",
        "Blueberry syrup",
        "Ice",
        "Lemon juice"
        ]
    },
    {
      name: "Vanilla Cream Cold Brew",
      imageUrl: VanillaColdBrew,
      price: 6.0,
      ingredients: ["Cold brew coffee", "Vanilla cream", "Brown sugar"]
    },
    {
      name: "Forest Berry Sparkle",
      imageUrl: ForestBerrySparkle,
      price: 6.5,
      ingredients: ["Mixed berry purée", "Sparkling water", "Mint", "Lime"]
    }
];
