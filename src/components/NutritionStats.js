import React from 'react';
import iconCalories from '../assets/icon_calories.png';
import iconProteins from '../assets/icon_proteins.png';
import iconCarbs from '../assets/icon_carbs.png';
import iconFats from '../assets/icon_fats.png';

function NutritionStats({ keyData }) {
    return (
        <div className="nutrition-stats">
            <div className="nutrition-calories">
                <div className="icon-background">
                    <img src={iconCalories} alt="calories icon" />
                </div>
                <div className="nutrition-informations">
                    <p>{keyData.calorieCount}<span>kCal</span></p>
                    <p>Calories</p>
                </div>
            </div>
            <div className="nutrition-proteins">
                <div className="icon-background">
                    <img src={iconProteins} alt="proteins icon" />
                </div>
                <div className="nutrition-informations">
                    <p>{keyData.proteinCount}<span>g</span></p>
                    <p>Protéines</p>
                </div>
            </div>
            <div className="nutrition-carbs">
                <div className="icon-background">
                    <img src={iconCarbs} alt="carbs icon" />
                </div>
                <div className="nutrition-informations">
                    <p>{keyData.carbohydrateCount}<span>g</span></p>
                    <p>Glucides</p>
                </div>
            </div>
            <div className="nutrition-fats">
                <div className="icon-background">
                    <img src={iconFats} alt="fats icon" />
                </div>
                <div className="nutrition-informations">
                    <p>{keyData.lipidCount}<span>g</span></p>
                    <p>Lipides</p>
                </div>
            </div>
        </div>
    );
}

export default NutritionStats;
