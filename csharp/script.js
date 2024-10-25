// Assuming you are using Node.js with Express
const express = require('express');
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(express.json());

app.post('/run', (req, res) => {
    const code = req.body.code;

    // Save the code to a C# file
    const codeFilePath = path.join(__dirname, 'program.cs');
    fs.writeFileSync(codeFilePath, code);

    // Compile and run the C# program using the .NET SDK
    exec('dotnet run', { cwd: __dirname }, (error, stdout, stderr) => {
        if (error) {
            return res.json({ output: stderr });
        }
        res.json({ output: stdout });
    });
});

app.listen(3000, () => console.log('Server is running on port 3000'));
