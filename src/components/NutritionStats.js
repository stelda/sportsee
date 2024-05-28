import React from 'react';

function NutritionStats() {
    return (
        <div className="nutrition-stats">
            <div className="nutrition-calories">
                <img src="icons/burned-calories.svg" alt="burned calories" />
                <p>725 <span>Calories</span></p>
            </div>
            <div className="nutrition-protein">
                <img src="icons/protein.svg" alt="protein" />
                <p>25 <span>g</span></p>
            </div>
            <div className="nutrition-carbs">
                <img src="icons/carbs.svg" alt="carbs" />
                <p>50 <span>g</span></p>
            </div>
            <div className="nutrition-fat">
                <img src="icons/fat.svg" alt="fat" />
                <p>15 <span>g</span></p>
            </div>
        </div>
    );
}

export default NutritionStats;
