import {Router} from 'express';
import { addPlayerController, deletePlayerController, getPlayersController, getPlayesrByRankController, getRandomPlaayerController, updatePlayerController } from '../controllers/playerController';
const router = Router();

router.route("/players/random").get(getRandomPlaayerController); //getting a random player

router.route("/players/ranks/:rank").get(getPlayesrByRankController); //get player with that specific rank . Will have to find a way to do that.
 
router.route("/players").get(getPlayersController).post(addPlayerController); //get the list of all players and also add a new entry to the player.

router.route("/players/:id").put(updatePlayerController).delete(deletePlayerController); //update and delete a specific player.

export default router;