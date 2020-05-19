import thunk from "redux-thunk";
import logger from "./logger";
import { applyMiddleware } from "redux";

return applyMiddleware(thunk, logger);
