import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middleware/ensureAdmin";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ListUserSendComplimentsController } from "./controllers/ListUserSendComplimentsController";
import { ListUserReceiveComplimentsController } from "./controllers/ListUserReceiveComplimentsController";
import { ensureAuthenticate } from "./middleware/ensureAuthenticate";
import { ListTagsController } from "./controllers/ListTagsController";
import { ListUsersController } from "./controllers/ListUsersController";

const router = Router();

const listUsersController = new ListUsersController();
const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const listTagsController = new ListTagsController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listUserSendComplimentsController = new ListUserSendComplimentsController();
const listUserReceiveComplimentsController = new ListUserReceiveComplimentsController();

router.get("/users", ensureAuthenticate, listUsersController.handle);
router.post("/users", createUserController.handle);
router.get("/tags", ensureAuthenticate, ensureAdmin, listTagsController.handle);
router.post("/tags", ensureAuthenticate, createTagController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/compliments", ensureAuthenticate, createComplimentController.handle);

router.get("/compliments/send", ensureAuthenticate, listUserSendComplimentsController.handle)
router.get("/compliments/receive", ensureAuthenticate, listUserReceiveComplimentsController.handle)

export {router};