import SidePanelProvider from "../framework/providers/SidePanelProvider";
import AccountsProvider from "./AccountsProvider";
import BudgetProvider from "./BudgetProvider";
import TransactionsProvider from "./TransactionsProvider";

const providers = [SidePanelProvider, BudgetProvider, TransactionsProvider, AccountsProvider]

const RegisterProviders = ({ children }) =>
    providers.reduce((prev, CurrentProvider) => <CurrentProvider>{prev}</CurrentProvider>, children)

export default RegisterProviders
