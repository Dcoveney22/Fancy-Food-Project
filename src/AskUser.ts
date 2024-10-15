import { rawlist } from '@inquirer/prompts'

export class AskUser {
    answer = ''
    answerArray = []
            async getInput(){
                const answerQ = await rawlist({
                    message: "Please select the option to add",
                    choices: [
                        { name: "Quality_Score", value: "Quality_Score" },
                    ],
                
                });
                    this.answer = answerQ
                   
                    
                  
            }
                
}
