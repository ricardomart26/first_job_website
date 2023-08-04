const PrismaClient = require('@prisma/client');

const prisma = new PrismaClient({
    datasources: {
        db: {
            url:          
        }       
    },

});

export default prisma;
