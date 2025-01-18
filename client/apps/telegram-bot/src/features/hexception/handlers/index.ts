import { Composer } from 'grammy';
import { BotContext } from '../../../types';
import { arrivalsHandler } from './arrivalsHandler';
import { changeRealmHandler } from './changeRealmHandler';
import { constructionHandler } from './constructionHandler';
import { goToWorldmapHandler } from './goToWorldmapHandler';
import { helpHandler } from './helpHandler';
import { militaryHandler } from './militaryHandler';
import { realmDetailsHandler } from './realmDetailsHandler';
import { resourcesHandler } from './resourcesHandler';
import { settingsHandler } from './settingsHandler';
import { tradeHandler } from './tradeHandler';

const hexceptionHandlers = new Composer<BotContext>();

// Combine all handlers
hexceptionHandlers.use(realmDetailsHandler);
hexceptionHandlers.use(resourcesHandler);
hexceptionHandlers.use(constructionHandler);
hexceptionHandlers.use(militaryHandler);
hexceptionHandlers.use(arrivalsHandler);
hexceptionHandlers.use(tradeHandler);
hexceptionHandlers.use(goToWorldmapHandler);
hexceptionHandlers.use(changeRealmHandler);
hexceptionHandlers.use(settingsHandler);
hexceptionHandlers.use(helpHandler);

export { hexceptionHandlers };
