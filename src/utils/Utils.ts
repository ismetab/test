import {environment} from "../environments/environment";
import {UserRole} from "../app/demo/components/auth/login/user.model";

export class Utils {

    static getDashboardURL(roles: string[]): string {

        if (roles.includes(UserRole.USER)) {
            return '/' + environment.userDashboard;
        } else if (roles.includes(UserRole.ADMIN)) {
            return '/' + environment.adminDashboard;
        }
        return environment.loginPage;

    }

}
