import { checkbox } from '@inquirer/prompts'
import { rawlist } from '@inquirer/prompts'

export class AskUser {
    answer = ''
    answerArray = []
            async getInput(){
                const answerQ = await rawlist({
                    message: "Please select a Supplier",
                    choices: [
                        { name: "Quality_Score", value: "Quality_Score" },
                    ],
                
                });
                    this.answer = answerQ
                    // console.log(this.answer)
                    
                  
            }
                
}

// async getInput(){
//     const answerQ = await rawlist({
//         message: "Please select a Supplier",
//         choices: [
//             { name: "Gourmet Foods Inc", value: "Gourmet Foods Inc" },
//             { name: "Italian Delicacies", value: "Italian Delicacies" },
//             { name: "French Cheese Co", value: "French Cheese Co" },
//             { name: "Luxury Caviar Co", value: "Luxury Caviar Co" },
//             { name: "French Gourmet", value: "French Gourmet" },
//             { name: "Seafood Delights", value: "Seafood Delights" },
//             { name: "Organic Veggie Farm", value: "Organic Veggie Farm" },
//             { name: "Healthy Harvest", value: "Healthy Harvest" },
//             { name: "Farm Fresh Produce", value: "Farm Fresh Produce" },
//             { name: "Colorful Veggies Co", value: "Colorful Veggies Co"},
//             { name: "Urban Greens", value: "Urban Greens"}
//         ],
    
//     });
//         this.answer = answerQ
// }
// }